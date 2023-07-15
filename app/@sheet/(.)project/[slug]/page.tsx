import IntersetprionSheet from "@/components/shared/IntersetprionSheet";

export default function BlogViewInterseption({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  return (
    <IntersetprionSheet>
      {slug}
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut amet
        distinctio blanditiis consectetur iste tempore aut aperiam repellat,
        accusamus odio?
      </p>
    </IntersetprionSheet>
  );
}
