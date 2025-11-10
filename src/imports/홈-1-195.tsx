import svgPaths from "./svg-urznx8bwvj";
import img28 from "figma:asset/c6688b2a951bd0fe9393e11639c0df577d986f04.png";
import imgAtomouse1993AcrylicOnCanvas100X100CmCopy from "figma:asset/55c5fb9ebc30b9a9aed2fa06ceb48c81199b1e22.png";
import img501Check from "figma:asset/ae477011e5db3a5aa32347b9126237d86a4f5220.png";

function Group() {
  return (
    <div className="absolute contents left-[calc(41.667%+86px)] top-[888px]">
      <div className="absolute bg-white h-[6px] left-[calc(41.667%+86px)] rounded-[4px] top-[888px] w-[52px]" />
      <div className="absolute bg-white left-[calc(50%+6px)] opacity-40 rounded-[4px] size-[6px] top-[888px]" />
      <div className="absolute bg-white left-[calc(50%+20px)] opacity-40 rounded-[4px] size-[6px] top-[888px]" />
      <div className="absolute bg-white left-[calc(50%+34px)] opacity-40 rounded-[4px] size-[6px] top-[888px]" />
      <div className="absolute bg-white left-[calc(50%+48px)] opacity-40 rounded-[4px] size-[6px] top-[888px]" />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-black relative size-full" data-name="홈">
      <p className="absolute font-['LINE_Seed_JP_TTF:Bold',sans-serif] leading-[1.1] left-1/2 not-italic text-[16px] text-center text-nowrap text-white top-[32px] tracking-[-0.48px] translate-x-[-50%] whitespace-pre">Installation view, VANITAS</p>
      <p className="absolute font-['LINE_Seed_JP_TTF:Bold',sans-serif] leading-[1.1] left-[calc(95.833%-14px)] not-italic text-[16px] text-nowrap text-right text-white top-[32px] tracking-[-0.48px] translate-x-[-100%] whitespace-pre">Suk Jihee</p>
      <p className="absolute font-['LINE_Seed_JP_TTF:Regular',sans-serif] leading-[1.4] left-[calc(25%+420px)] not-italic text-[12px] text-[dimgrey] text-center top-[634px] tracking-[-0.36px] translate-x-[-50%] w-[792px]">Sketch</p>
      <div className="absolute font-['LINE_Seed_JP_TTF:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[1.6] left-1/2 text-[#cfcfcf] text-[12px] text-center top-[703px] tracking-[-0.36px] translate-x-[-50%] w-[792px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">Meekyoung Shin (b. 1967) lives and works in Seoul and London and has completed studies at the Seoul National University, Slade School of Art, and Royal college of art in London.</p>
        <p className="mb-0">Meekyoung Shin is internationally renowned for her sculptures that probe the mis- and re-translations that often emerge when objects of distinct cultural and historical specificity are dislocated from their origins. Made from soap, her work replicates artefacts and works of art, from Asian porcelain vases to Greek and Roman sculptures, translating between continents, cultures, and centuries in the process.</p>
        <p>Shin is recognized for her iconic Translation Series (2004-ongoing) and Toilet Series, installations of usable soap sculptures in public bathrooms, which are subsequently exhibited in the gallery context in their eroded form.ﾠ</p>
      </div>
      <Group />
      <div className="absolute h-[344px] left-[calc(66.667%+12px)] top-[199px] w-[516px]" data-name="28">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={img28} />
          <div className="absolute bg-[rgba(0,0,0,0.8)] inset-0" />
        </div>
      </div>
      <div className="absolute bg-white left-[calc(91.667%+72px)] rounded-[500px] size-[32px] top-[25px]" />
      <div className="absolute left-[calc(91.667%+78px)] size-[20px] top-[31px]" data-name="instagram">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="instagram">
            <path d={svgPaths.p115bd300} fill="black" />
            <path d={svgPaths.p2e4f7900} fill="black" />
            <path d={svgPaths.p283ed700} fill="black" />
          </g>
        </svg>
      </div>
      <p className="absolute font-['LINE_Seed_JP_TTF:Bold',sans-serif] leading-[1.1] left-[calc(4.167%-38px)] not-italic text-[16px] text-nowrap text-white top-[32px] tracking-[-0.48px] uppercase whitespace-pre">Project 308</p>
      <div className="absolute h-[502px] left-[calc(33.333%+29px)] top-[120px] w-[501px]" data-name="아토마우스 Atomouse,1993, acrylic on canvas, 100x100cm copy">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAtomouse1993AcrylicOnCanvas100X100CmCopy} />
      </div>
      <div className="absolute h-[322px] left-[33px] top-[210px] w-[516px]" data-name="5_01_check">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={img501Check} />
          <div className="absolute bg-[rgba(0,0,0,0.8)] inset-0" />
        </div>
      </div>
    </div>
  );
}