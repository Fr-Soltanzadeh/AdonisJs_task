import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Consultation from 'App/Models/Consultation'
import CreateConsultationValidator from 'App/Validators/CreateConsultationValidator'
import Database from '@ioc:Adonis/Lucid/Database'


export default class ConsultationsController {
    public async create({request, response}: HttpContextContract) {

        const payload: any = await request.validate(CreateConsultationValidator)
        const consultation: Consultation = await Consultation.create(payload)

        return response.created(consultation)
    }

    public async get({response, request}: HttpContextContract) {
        try{
            const page = request.input('page', 1)
            const limit = 3
            const category = request.input('category', null)
            const dateBefore = request.input('date_before', null)
            const dateAfter = request.input('date_after', null)
            const sortBy = request.input('sort', null)
            let query = Database.from('consultations')
                .if(dateBefore, (builder) => {
                    builder.where('created_at', '<', dateBefore);
                })
                .if(dateAfter, (builder) => {
                    builder.where('created_at', '>', dateAfter);
                })
                .if(category, (builder) => {
                    builder.where('category', category);
                })
                .if(sortBy=='date_ascending', (builder) => {
                    builder.orderBy('created_at', 'asc');
                })
                .if(sortBy=='date_descending', (builder) => {
                    builder.orderBy('created_at', 'desc');
                })
                // .orderBy('created_at', sortBy === 'date_ascending' ? 'asc' : 'desc')
                .paginate(page, limit);

            const consultations = await query;
            consultations.baseUrl('/admin/consultations')
            return response.ok(consultations)
            
        }catch(error){
            console.error(error)
            return response.badRequest({
                "message": error,
                "status_code": 400,
            })
        }
    }
}
