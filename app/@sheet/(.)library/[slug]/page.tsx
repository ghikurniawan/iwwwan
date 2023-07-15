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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
        perspiciatis architecto quia alias totam nesciunt tempora doloribus
        asperiores dolor libero.
      </p>
    </IntersetprionSheet>
  );
}
