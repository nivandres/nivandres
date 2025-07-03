interface Props {
  params: Promise<{ post: string }>;
}

export default async function Page({ params }: Props) {
  const { post } = await params;
  const { default: Post } = await import(
    `@/../public/docs/articles/${post}.md`
  );
  return <Post />;
}
