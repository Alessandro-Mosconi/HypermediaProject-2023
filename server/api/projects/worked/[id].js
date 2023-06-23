import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id

    const client = serverSupabaseClient(event)

    let { data, error } = await client
        .from('team')
        .select(`
            id_person,
            project (
                id,
                *
            )`)
        .eq('id_person', id)

    if (error) {
        throw createError({ statusCode: 400, statusMessage: error.message })
    }


    return data.map(element => element.project)
})