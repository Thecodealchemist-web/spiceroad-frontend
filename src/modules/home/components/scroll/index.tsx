"use client"
import { useEffect, useRef } from "react";
import styles from "./index.module.css";
import { IoIosStar } from "react-icons/io";

const InfiniteScroll: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (scroller) {
      const scrollerInner = scroller.children[0] as HTMLDivElement;

      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <div className={styles.scroller} ref={scrollerRef}>
      <div className={styles.scrollerInner}>
        <div className={styles.item}>
          <div className="flex mb-1 justify-end text-amber-400	"><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/></div>
          <div className="flex justify-end max-w-[300px] max-h-[100px] p-2 columns-1 text-sm">
          <p className="text-right">يضيف الهيل نكهة نفاذة إلى القهوة العربية<br></br> مما يجعلها عطرة ولذيذة. وتعزز رائحتها  <br></br>نكهة القهوة يجب أن يجربها عشاق القهوة</p>
          </div>
          <div className="flex mt-3 p-2 justify-end">مروة </div>
        </div>
        <div className={styles.item}>
          <div className="flex mt-0  justify-end text-amber-400	"><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/></div>
          <div className="flex justify-end mt-4 max-w-[300px] max-h-[100px] p-2 columns-1 text-sm">
          <p className="text-right">الكبسة مع الهيل متعة رائحتها فريدة <br></br>   وطعم لذيذ وعنصر أساسي للكبسة </p>
          </div>
          <div className="flex mt-4 p-2 justify-end">أم سلوى </div>
        </div>
        <div className={styles.item}>
          <div className="flex mt-0  justify-end text-amber-400	"><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/></div>
          <div className="flex justify-end mt-4 max-w-[300px] max-h-[100px] p-2 columns-1 text-sm">
          <p className="text-right">استخدام الهيل في البرياني<br></br>   كل قضمة تجربة عطرية </p>
          </div>
          <div className="flex mt-4 p-2  justify-end">عمر </div>
        </div>
        <div className={styles.item}>
          <div className="flex mt-0  justify-end text-amber-400	"><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/></div>
          <div className="flex justify-end mt-4 max-w-[300px] max-h-[100px] p-2 columns-1 text-sm">
          <p className="text-right">الهيل في المهلبية إضافة <br></br>    (ممتازة للحلى) لذيذة جدا</p>
          </div>
          <div className="flex mt-4 justify-end">أم محمد </div>
        </div>
        <div className={styles.item}>
          <div className="flex mt-0  justify-end text-amber-400	 "><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/></div>
          <div className="flex justify-end mt-4 max-w-[300px] max-h-[100px] p-2 columns-1 text-sm">
          <p className="text-right">أضاف الهيل على دجاج الزبدة<br></br> نكهة عطرية رفعت مستوى الطبق</p>
          </div>
          <div className="flex mt-4 p-2  justify-end">كومار </div>
        </div>        
      </div>
    </div>
  );
};

export default InfiniteScroll;
