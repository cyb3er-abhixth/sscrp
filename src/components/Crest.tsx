import { AssetImage } from "./AssetImage";
import { BRAND_ASSETS } from "@/lib/assets";

type Props = { className?: string; size?: number };

export function Crest({ className, size = 64 }: Props) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <AssetImage
        src={BRAND_ASSETS.crestPlaceholder}
        alt="South Sydney City RP crest"
        width={size}
        height={size}
        containerClassName="h-full w-full rounded-full border-0 bg-transparent"
        className="rounded-full object-cover"
      />
    </div>
  );
}