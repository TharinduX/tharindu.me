import db from '@/lib/firebase';

export async function POST(req: Request) {
  const body = await req.json();
  const ref = db.ref('live');
  const { snapshot } = await ref.transaction((currentData: any) => {
    return {
      valid: true,
      data: {
        sessionStarted: body.sessionStarted,
        sessionEnded: body?.sessionEnded || { valid: false, time: null },
        activeFile: body?.activeFile || {
          valid: false,
          name: null,
          time: null,
        },
      },
    };
  });
  return new Response('OK', { status: 200 });
}

export async function GET(req: Request) {
  const snapshot = await db.ref('live').once('value');
  const live = snapshot.val();
  return new Response(JSON.stringify({ event: live }), {
    status: 200,
    statusText: 'OK',
  });
}
