import SaleBanner from "./Blocks/Specials/SaleBanner";
import DiscountBanner from "./Blocks/Specials/DiscountBanner";
import PreviewCatalog from "./Blocks/PreviewCatalog";
import PreviewSale from "./Blocks/PreviewSale";

function Main() {
  return (
    <main>
      <SaleBanner />
      <PreviewCatalog />
      <DiscountBanner />
      <PreviewSale />
    </main>
  );
}

export default Main;
