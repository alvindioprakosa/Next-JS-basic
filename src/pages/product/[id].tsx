import { useRouter } from "next/router";

const DetailProduct = () => {
  const { query } = useRouter(); // Mengambil parameter dari URL
  console.log(query);            // Menampilkan semua query params di console

  return (
    <div>
      <p>Detail Product</p>
      <p>Product :{query.id} </p>  {/* Menampilkan ID dari URL */}
    </div>
  );
};

export default DetailProduct;
