import db from '@/lib/firebase';

//post request to increment views
export async function POST(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const ref = db.ref('views').child(params.slug);
  const { snapshot } = await ref.transaction((currentViews: number) => {
    if (currentViews === null) {
      return 1;
    }
    return currentViews + 1;
  });
  return new Response('OK', { status: 200 });
}

//get request to get views
export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const snapshot = await db.ref('views').child(params.slug).once('value');
  const views = snapshot.val();
  return new Response(JSON.stringify({ total: views }), {
    status: 200,
    statusText: 'OK',
  });
}
