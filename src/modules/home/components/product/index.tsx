"use client"
import { Button } from "../../../common/ui/button"
import Image from "next/image"
import { useState } from "react";
import styles from "./index.module.css";
import { IoIosStar } from "react-icons/io";
import { CiSquarePlus , CiSquareMinus} from "react-icons/ci";

type PurchaseType = "حبة صغير" | "حبة كبير";
type PackSize = "حجم 80ج" | "كرتون 16 كيس" | "حجم 250 ج";

const pricing = {
    "حجم 80ج": { "حبة صغير": 19, "حبة كبير": 29 },
    "كرتون 16 كيس": { "حبة صغير": 624, "حبة كبير": 784 },
    "حجم 250 ج": { "حبة صغير": 39, "حبة كبير": 49 }
};

const images = {
    "حجم 80ج": "https://spiceroad.s3.eu-north-1.amazonaws.com/80g.png",
    "كرتون 16 كيس": "https://spiceroad.s3.eu-north-1.amazonaws.com/pack.png",
    "حجم 250 ج": "https://spiceroad.s3.eu-north-1.amazonaws.com/250.png"
};

export default function ProductSec() {
    const [packSize, setPackSize] = useState<PackSize>("حجم 250 ج");
    const [purchaseType, setPurchaseType] = useState<PurchaseType>("حبة صغير");
    const [quantity, setQuantity] = useState<number>(1);

    const price = pricing[packSize][purchaseType];
    const imageUrl = images[packSize];

    const handlePackSizeChange = (size: PackSize) => setPackSize(size);
    const handlePurchaseTypeChange = (type: PurchaseType) => setPurchaseType(type);

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => quantity > 1 && setQuantity(quantity - 1);

    return (
        <div className={styles.sectionGradient}>
            <div className="flex flex-col items-center md:w-1/2">
                <Image src={imageUrl} alt="Product" width={350} height={200} className="w-90% mr-4 h-auto mb-4" />
                <div className="flex items-center justify-center space-x-2">
                    {Object.entries(images).map(([size, url]) => (
                        <Image
                            key={size}
                            src={url}
                            width={300}
                            height={100}
                            alt={`pic-${size}`}
                            className="w-12 h-16"
                            onClick={() => handlePackSizeChange(size as PackSize)}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center md:w-1/2">
                <h1 className="text-3xl font-bold mb-4 text-center">هيل هندي فاخر</h1>
                
                {/* Display selected PackSize and PurchaseType */}
                <div className="mb-4 text-lg text-center">
                    <p>الحجم: {packSize}</p>
                    <p>نوع الشراء: {purchaseType}</p>
                </div>

                <div className="text-2xl font-bold decoration-slate-300">SAR {price}</div>
                <p className="flex text-lg p-3 mb-4">
                    <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                </p>
                <p className="text-sm text-center mb-4">
                    حبوب هيل فاخرة عالية الجودة تضفي نكهة دافئة ورائحة منعشة للأطعمة والمشروبات. تترك أثرا من السعادة في قلوبكم ونتقي أجسامكم من السموم لصحتكم 
                </p>
                <div className="mt-4">
                    <label htmlFor="quantity" className="block text-xl font-bold text-center ">الحجم</label>
                    <div className="flex space-x-2 mt-2">
                        {Object.keys(pricing).map(size => (
                            <Button
                                key={size}
                                variant={packSize === size ? "outline" : "default"}
                                onClick={() => handlePackSizeChange(size as PackSize)}
                            >
                                {size}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="mt-4">
                    {(["حبة صغير", "حبة كبير"] as PurchaseType[]).map(type => (
                        <Button
                            key={type}
                            variant={purchaseType === type ? "outline" : "default"}
                            onClick={() => handlePurchaseTypeChange(type)}
                        >
                            {type}
                            <div className="ml-1">ريال</div>
                            <div className="ml-1">{pricing[packSize][type]}</div>
                        </Button>
                    ))}
                </div>
                <div className="mt-4 flex items-center">
                    <button onClick={decrementQuantity} className="p-2 text-3xl rounded-full">
                        <CiSquareMinus />
                    </button>
                    <div className="mx-4 text-xl">{quantity}</div>
                    <button onClick={incrementQuantity} className="p-2 text-3xl rounded-full">
                        <CiSquarePlus />
                    </button>
                    <label htmlFor="quantity" className="block text-xl font-bold text-center pl-3">العدد</label>
                </div>
                <Button className="w-full mt-3 bg-black hover:bg-zinc-900 text-white">اشتر الان</Button>
                <div className="flex items-center justify-between space-x-20 mt-4">
                    <div className="flex flex-col items-center">
                        <SafeIcon/>
                        <p>تغليف امن</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <ScentIcon/>
                        <p>رائحة زكية</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <BananaIcon />
                        <p>جودة عالية</p>
                    </div>
                </div>
                <p className="text-sm text-center mt-4">سعر الشحن 12 ريال داخل جدة و 30 ريال داخل الرياض</p>
            </div>
        </div>
    );
}


function BananaIcon() {
  return (
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="46.1pt" height="42.9pt" viewBox="0 0 461.000000 429.000000"
      preserveAspectRatio="xMidYMid meet">

      <g transform="translate(0.000000,429.000000) scale(0.100000,-0.100000)"
      fill="#fff" stroke="none">
      <path d="M1351 3915 c-88 -31 -151 -126 -151 -228 -1 -94 -47 -163 -155 -231
      -210 -132 -417 -475 -526 -871 -6 -22 -15 -51 -19 -65 -5 -14 -11 -38 -14 -55
      -3 -16 -12 -61 -21 -100 -91 -417 -85 -818 17 -1129 89 -273 234 -465 461
      -609 79 -51 95 -51 123 -1 12 22 19 45 16 50 -4 6 -29 23 -57 38 -225 128
      -395 372 -463 666 -42 177 -50 540 -18 758 54 372 150 668 298 917 76 129 145
      211 163 193 3 -3 -5 -48 -19 -99 -64 -237 -81 -380 -80 -677 0 -288 -1 -284
      74 -273 l45 6 -4 210 c-4 245 10 404 50 585 25 111 33 140 56 215 24 79 37
      113 54 147 5 10 9 23 9 30 0 7 20 37 44 67 49 59 73 125 86 229 7 57 13 71 39
      94 37 33 97 38 141 11 38 -22 48 -45 53 -126 3 -48 13 -86 35 -130 33 -69 54
      -127 83 -232 11 -38 26 -95 35 -125 30 -103 114 -501 114 -539 0 -9 5 -33 11
      -54 l10 -38 47 7 c26 3 51 10 55 14 7 6 -8 104 -44 295 -17 90 -70 320 -89
      385 -13 46 -13 60 3 60 13 0 95 -82 139 -137 60 -77 147 -238 208 -388 14 -34
      58 -158 71 -200 6 -22 15 -51 20 -65 4 -14 11 -46 15 -72 6 -46 5 -48 -17 -48
      -51 0 -258 -22 -337 -35 -307 -53 -556 -169 -714 -331 -136 -140 -201 -262
      -258 -481 -8 -31 -19 -47 -40 -58 -62 -32 -73 -103 -41 -259 22 -105 40 -133
      106 -165 42 -20 60 -39 115 -119 342 -502 985 -677 1790 -487 151 36 160 38
      260 70 421 135 772 359 899 572 23 38 41 72 41 76 0 4 11 25 25 47 40 64 89
      89 200 100 99 10 132 24 159 65 23 34 20 68 -10 130 -51 103 -168 205 -237
      205 -32 0 -123 46 -177 89 -24 20 -76 68 -115 107 -91 92 -173 149 -315 217
      -281 135 -579 207 -1014 245 l-189 17 -17 70 c-27 109 -64 235 -90 300 -129
      330 -259 529 -423 650 -34 24 -79 57 -100 72 -62 44 -87 98 -97 202 -7 76 -13
      97 -37 130 -61 85 -182 122 -282 86z m1389 -1664 c407 -51 706 -144 942 -293
      42 -27 79 -56 82 -64 6 -16 -21 -15 -139 6 -46 9 -110 16 -445 51 -184 19
      -744 16 -935 -5 -424 -46 -768 -137 -1036 -272 -39 -19 -82 -40 -96 -45 -24
      -9 -25 -8 -18 18 10 42 54 131 96 193 119 178 335 311 607 375 172 41 217 46
      432 54 201 6 362 1 510 -18z m-50 -420 c0 -5 -12 -33 -27 -62 -25 -47 -28 -65
      -28 -144 0 -92 6 -109 68 -198 10 -14 9 -22 -5 -45 -61 -98 -63 -104 -63 -198
      0 -100 20 -157 76 -210 16 -15 29 -33 29 -40 0 -7 -35 -16 -92 -23 -51 -6
      -114 -14 -140 -18 -56 -7 -57 -5 -28 81 34 100 19 214 -39 307 -17 28 -31 55
      -31 61 0 6 13 32 30 58 36 56 60 130 60 185 0 57 -23 147 -48 190 -28 47 -28
      53 6 58 55 8 232 7 232 -2z m523 -12 c40 -6 75 -14 80 -18 4 -4 0 -22 -9 -40
      -35 -71 -27 -164 23 -243 28 -46 28 -50 0 -96 -13 -20 -30 -60 -37 -89 -17
      -65 -1 -142 42 -210 32 -50 29 -60 -23 -73 -19 -4 -69 -18 -113 -30 -43 -11
      -81 -19 -84 -16 -3 3 2 23 11 43 48 112 37 230 -30 320 -12 17 -23 34 -23 37
      0 3 13 26 30 52 48 76 64 146 50 219 -6 33 -22 79 -35 102 -12 23 -20 44 -17
      47 8 9 56 7 135 -5z m-1183 -35 c0 -3 -10 -38 -21 -76 -35 -116 -16 -227 58
      -340 17 -27 17 -29 0 -55 -75 -114 -95 -234 -58 -338 12 -33 24 -68 28 -77 5
      -16 -2 -17 -73 -12 -88 6 -214 24 -228 32 -5 2 9 21 32 41 103 92 120 232 41
      341 -34 46 -35 53 -12 71 9 8 27 38 40 67 38 87 28 168 -32 246 -42 56 -38 60
      86 85 100 20 139 25 139 15z m274 -15 c95 -75 90 -290 -9 -351 -39 -24 -70
      -23 -106 3 -49 34 -72 93 -73 179 0 84 14 122 64 164 39 32 87 34 124 5z m637
      4 c86 -51 91 -208 9 -277 -94 -78 -216 26 -193 164 18 108 104 160 184 113z
      m601 -12 c27 -24 32 -36 35 -87 6 -92 -40 -150 -110 -137 -80 15 -103 158 -37
      225 36 36 71 36 112 -1z m273 -22 c33 -6 81 -14 106 -18 25 -4 59 -17 77 -29
      43 -31 149 -78 193 -86 43 -8 139 -102 139 -135 0 -19 -6 -21 -60 -21 -79 0
      -157 -30 -217 -84 -26 -24 -66 -52 -88 -63 -52 -27 -239 -103 -251 -103 -5 0
      -9 35 -9 78 0 68 -4 83 -32 133 l-32 56 32 59 c29 54 31 67 31 147 l0 88 26
      -6 c14 -3 52 -10 85 -16z m-2115 -119 c25 -28 30 -42 30 -86 0 -63 -30 -106
      -86 -124 -77 -26 -164 39 -164 122 0 81 55 131 138 125 44 -3 57 -9 82 -37z
      m-344 -83 c2 -52 30 -130 65 -178 10 -14 6 -26 -22 -70 -32 -50 -34 -59 -34
      -134 0 -44 4 -94 9 -112 l8 -32 -33 9 c-71 21 -217 95 -247 126 -21 22 -37 29
      -86 36 -23 4 -40 50 -50 135 l-7 62 41 21 c22 11 40 25 40 30 0 20 282 174
      305 167 6 -2 11 -29 11 -60z m2176 -147 c36 -28 51 -72 46 -132 -4 -42 -11
      -57 -37 -80 -40 -36 -75 -36 -111 0 -53 53 -52 154 2 204 35 33 66 36 100 8z
      m-585 -68 c86 -69 83 -219 -6 -279 -42 -28 -76 -29 -118 -3 -81 49 -92 193
      -20 268 26 27 38 32 76 32 28 0 54 -7 68 -18z m-1271 -61 c70 -42 81 -143 22
      -201 -55 -55 -132 -54 -185 5 -29 30 -33 42 -33 87 0 30 7 61 15 72 42 56 123
      72 181 37z m615 8 c11 -6 34 -31 50 -57 26 -41 29 -55 29 -123 0 -90 -25 -150
      -75 -181 -38 -23 -62 -23 -102 2 -51 30 -76 91 -76 180 -1 64 3 81 26 117 43
      68 96 90 148 62z m1582 -156 c7 -11 -48 -71 -113 -125 -218 -180 -600 -343
      -982 -419 -27 -5 -69 -13 -95 -18 -179 -36 -513 -47 -668 -23 -226 35 -394 97
      -547 200 -86 58 -209 172 -192 178 6 3 34 -4 61 -15 101 -40 302 -92 428 -110
      311 -47 681 -37 1038 29 31 5 81 14 110 19 198 34 630 163 857 255 95 38 97
      39 103 29z"/>
      </g>
      </svg>
  )
}


function ScentIcon() {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="20.5pt" height="27.2pt" viewBox="0 0 205.000000 272.000000"
      preserveAspectRatio="xMidYMid meet">

      <g transform="translate(0.000000,272.000000) scale(0.100000,-0.100000)"
      fill="#FFF" stroke="none">
      <path d="M492 2494 c-323 -108 -468 -453 -341 -812 61 -171 180 -319 386 -478
      48 -38 90 -71 93 -74 3 -3 31 -25 63 -48 67 -50 193 -171 230 -222 127 -173
      143 -384 43 -554 -32 -55 -108 -124 -175 -159 -41 -21 -67 -27 -125 -28 -89
      -2 -115 -14 -50 -23 77 -10 122 -7 178 13 135 47 237 153 295 306 20 52 21
      252 2 315 -53 177 -138 281 -416 515 -286 240 -357 328 -419 519 -37 112 -37
      254 0 358 30 83 83 160 146 210 175 141 467 137 612 -8 46 -46 96 -136 96
      -172 0 -11 5 -24 10 -27 6 -3 10 -21 11 -38 0 -18 4 -41 9 -52 6 -14 9 2 9 51
      2 167 -95 324 -239 387 -128 56 -290 64 -418 21z"/>
      <path d="M1450 2434 c-90 -32 -146 -88 -190 -191 -30 -72 -43 -183 -20 -183 6
      0 10 15 10 33 0 17 7 45 15 61 8 15 15 34 15 42 0 29 63 114 106 143 122 80
      353 35 458 -89 14 -17 33 -56 42 -86 20 -71 5 -145 -46 -221 -54 -79 -128
      -137 -285 -223 -33 -18 -111 -66 -172 -107 -137 -90 -220 -177 -270 -282 -34
      -71 -36 -78 -35 -181 0 -79 4 -115 16 -138 25 -49 36 -38 36 36 0 121 63 253
      154 325 22 17 49 38 58 46 10 8 92 57 183 108 92 51 192 112 223 135 163 120
      254 269 256 418 2 106 -32 183 -114 257 -103 95 -313 140 -440 97z"/>
      </g>
    </svg>
  )
}


function SafeIcon() {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="39.1pt" height="39.5pt" viewBox="0 0 391.000000 395.000000"
    preserveAspectRatio="xMidYMid meet">

    <g transform="translate(0.000000,395.000000) scale(0.100000,-0.100000)"
    fill="#fff" stroke="none">
    <path d="M1935 3674 c-251 -135 -650 -327 -845 -407 -108 -44 -197 -74 -284
    -97 -38 -10 -73 -24 -77 -32 -5 -7 -9 -283 -9 -614 0 -580 1 -602 19 -618 15
    -14 24 -15 40 -6 12 6 22 12 23 13 2 1 5 265 8 586 l5 583 100 33 c107 34 165
    56 232 86 24 10 45 19 48 19 2 0 48 20 101 45 53 25 98 45 101 45 6 0 558 277
    628 316 l51 27 109 -58 c119 -63 562 -285 569 -285 2 0 42 -17 88 -39 119 -55
    320 -135 408 -162 41 -13 81 -27 88 -33 10 -7 12 -155 10 -750 -4 -830 0 -782
    -79 -943 -130 -263 -448 -551 -879 -796 -109 -61 -299 -157 -313 -157 -15 0
    -201 93 -323 161 -36 20 -44 21 -58 10 -19 -16 -21 -54 -3 -69 38 -32 357
    -192 382 -192 24 0 247 110 377 186 281 164 445 287 628 473 175 176 254 295
    322 483 l23 63 3 787 c2 483 -1 794 -7 805 -5 11 -32 23 -68 31 -65 15 -141
    40 -253 84 -72 28 -90 36 -170 71 -150 66 -529 251 -717 352 -67 36 -130 65
    -140 65 -10 -1 -72 -30 -138 -66z"/>
    <path d="M2020 3398 c-52 -31 -420 -216 -535 -270 -181 -84 -429 -178 -472
    -178 -6 0 -19 -10 -27 -22 -14 -20 -16 -84 -16 -504 0 -265 3 -490 6 -498 11
    -30 43 -40 65 -20 18 16 19 37 19 491 l0 473 23 9 c12 5 47 16 77 26 66 21
    234 90 345 140 91 41 470 231 529 264 l39 22 81 -41 c187 -96 442 -223 494
    -247 99 -44 285 -119 342 -138 30 -10 65 -21 78 -26 l22 -9 0 -598 c0 -580 -1
    -601 -21 -663 -42 -128 -107 -228 -235 -358 -46 -47 -87 -80 -93 -77 -8 5 -11
    211 -11 709 0 679 -1 703 -20 734 -52 86 -175 80 -238 -10 -20 -30 -28 -59
    -52 -182 -4 -22 -19 -96 -33 -165 -24 -112 -40 -190 -107 -510 -26 -123 -26
    -205 -1 -246 24 -39 74 -77 124 -95 l37 -13 0 -226 0 -225 -36 -23 c-63 -41
    -245 -138 -301 -161 -29 -12 -37 -10 -119 30 -49 24 -96 51 -106 61 -17 17
    -18 49 -18 469 l0 451 49 48 c27 26 62 70 77 96 l29 49 3 343 c3 345 1 372
    -32 372 -40 -1 -41 -7 -46 -352 l-5 -333 -28 -47 c-15 -26 -47 -61 -71 -77
    -24 -17 -46 -38 -50 -46 -3 -9 -6 -239 -6 -511 0 -479 1 -495 20 -514 23 -23
    253 -140 276 -140 8 0 64 24 122 54 94 47 141 73 267 146 56 32 240 162 295
    208 78 66 208 198 257 262 23 30 60 91 83 135 76 151 73 119 77 800 3 336 2
    625 -2 642 -5 27 -12 34 -43 43 -214 58 -537 201 -951 420 -52 28 -101 50
    -110 49 -9 0 -32 -10 -51 -21z m614 -820 c14 -20 16 -108 16 -755 l0 -732 -52
    -40 c-29 -22 -56 -37 -60 -35 -4 3 -8 100 -8 216 0 235 -3 248 -64 248 -38 0
    -89 30 -112 65 -24 37 -19 72 88 570 5 28 14 68 18 90 14 75 60 289 70 326 17
    64 75 89 104 47z"/>
    <path d="M1432 2668 c-9 -9 -12 -98 -12 -340 0 -302 2 -331 20 -380 20 -52 53
    -95 106 -137 26 -21 27 -24 25 -120 -2 -137 22 -188 69 -146 18 16 20 32 20
    151 l0 133 -55 42 c-39 29 -62 56 -80 94 l-25 54 0 320 c0 306 -1 321 -19 331
    -25 13 -34 13 -49 -2z"/>
    <path d="M1606 2664 c-14 -13 -16 -56 -16 -313 0 -276 1 -299 18 -314 25 -23
    38 -21 56 5 14 19 16 66 16 308 0 242 -2 289 -16 308 -18 26 -37 28 -58 6z"/>
    <path d="M1782 2668 c-9 -9 -12 -94 -12 -320 0 -301 0 -308 21 -318 16 -9 25
    -8 40 6 18 16 19 34 19 315 0 257 -2 300 -16 313 -19 19 -36 20 -52 4z"/>
    <path d="M845 1754 c-267 -26 -519 -227 -611 -486 -21 -59 -44 -184 -44 -237
    0 -63 18 -166 42 -236 81 -238 273 -417 516 -480 86 -22 268 -22 353 0 276 72
    482 289 540 570 78 376 -160 754 -535 850 -57 15 -199 25 -261 19z m245 -99
    c165 -48 286 -137 382 -284 69 -106 98 -207 98 -344 0 -60 -6 -129 -14 -159
    -57 -213 -212 -380 -427 -459 -56 -21 -81 -24 -204 -24 -152 0 -173 5 -292 62
    -119 58 -240 184 -300 313 -60 126 -72 294 -33 440 34 131 154 296 269 369
    154 99 357 133 521 86z"/>
    <path d="M1324 1322 c-6 -4 -57 -61 -113 -127 -57 -66 -113 -131 -125 -145
    -12 -14 -66 -78 -120 -142 -65 -77 -103 -115 -112 -110 -13 7 -75 64 -190 174
    -78 74 -114 86 -135 47 -10 -20 -3 -30 82 -112 52 -49 129 -121 172 -158 90
    -80 89 -81 164 8 26 32 50 60 53 63 3 3 28 32 55 65 28 33 62 73 76 90 95 109
    234 273 246 292 25 38 -15 81 -53 55z"/>
    </g>
    </svg>
  )
}


function RefreshCwIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  )
}


function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
