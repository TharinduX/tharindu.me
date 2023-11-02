import db from '@/lib/firebase';

//post request to increment likes

export async function POST(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const ref = db.ref('likes').child(params.slug);
  const { snapshot } = await ref.transaction((currentLikes: number) => {
    if (currentLikes === null) {
      return 1;
    }
    return currentLikes + 1;
  });
  return new Response('OK', { status: 200 });
}

//get request to get likes
export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const snapshot = await db.ref('likes').child(params.slug).once('value');
  const likes = snapshot.val();
  return new Response(JSON.stringify({ total: likes }), {
    status: 200,
    statusText: 'OK',
  });
}

//delete request to decrement likes
export async function DELETE(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const ref = db.ref('likes').child(params.slug);
  const { snapshot } = await ref.transaction((currentLikes: number) => {
    if (currentLikes === null) {
      return 0;
    }
    return currentLikes - 1;
  });
  return new Response('OK', { status: 200 });
}
