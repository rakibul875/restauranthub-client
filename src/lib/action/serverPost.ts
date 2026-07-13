export const handlePost = async (
  path: string,
  newData: any,
  method: string = "POST"
): Promise<any> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${path}`,
    {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    }
  );

  return await res.json();
};

export const dataDelete = async (
  path: string
): Promise<any> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${path}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return await res.json();
};