import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id

    const client = serverSupabaseClient(event)

    let { data, error } = await client
        .from('team')
        .select(`
            people (
                id,
                *
            ),
            id_project)
            )`)
        .eq('id_project', id)

    if (error) {
        throw createError({ statusCode: 400, statusMessage: error.message })
    }


    return data.map(element => element.people)
})