import supabase from '@/lib/supabaseClient';

export async function GET(
  req: Request,
  { params }: { params: { apiKey: string } }
) {
  const apiKey = params.apiKey;
  const data = await checkApiKeyValidity(apiKey);

  const responseData = {
    valid: true,
    message: 'API key is valid',
    data,
  };

  const errorResponse = {
    valid: false,
    message: 'API key is invalid',
  };

  if (data !== null) {
    return new Response(JSON.stringify({ profile: responseData }), {
      status: 200,
      statusText: 'OK',
    });
  } else {
    return new Response(JSON.stringify({ profile: errorResponse }), {
      status: 401,
    });
  }
}

async function checkApiKeyValidity(apiKey: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('api', apiKey)
    .single();
  if (error) {
    return null;
  } else {
    return data;
  }
}
