export default defineEventHandler(async (event) => {
  const { data } = await readBody(event);

  if (!data) {
    throw createError({ statusCode: 404, statusMessage: 'Data Not Found' })
  }
  const isValidForm = data.name && data.mail && data.message && data.termAndCondition;
  if(!isValidForm) {
    throw createError({ statusCode: 400, statusMessage: 'Data not Valid' })
  }

  return `Received: ${JSON.stringify(data)}`;
});