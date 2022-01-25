import Image from "next/image";

export default function ProductIRego({ banner, thum_1, thum_2, thum_3 }) {
  console.log("banner", banner);
  return (
    <div className="position-relative product-banner">
      <img
        src={banner}
        className="img-fluid w-100 h_768 border product-banner"
      />
      <div className="thum-wrap position-absolute d-flex flex-column">
        <div className="position-relative active">
          <Image src={thum_1} layout="fill" />
        </div>
        <div className="position-relative">
          <Image src={thum_2} layout="fill" />
        </div>
        <div className="position-relative">
          <Image src={thum_1} layout="fill" />
        </div>
      </div>
    </div>
  );
}
