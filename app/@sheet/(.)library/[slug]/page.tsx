import IntersetprionSheet from "@/components/shared/IntersetprionSheet";

export default function BlogViewInterseption({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  console.log("library interseption", slug);
  return (
    <IntersetprionSheet>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
        perspiciatis architecto quia alias totam nesciunt tempora doloribus
        asperiores dolor libero.
      </p>
    </IntersetprionSheet>
  );
}
