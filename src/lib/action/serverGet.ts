export const handleGetSection = async (path: string): Promise<unknown> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL!}${path}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
};
