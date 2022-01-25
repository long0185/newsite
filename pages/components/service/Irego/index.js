import Image from "next/image";
import React from "react";
import irego from "assets/2560/service/useguide/irego.png";
import play from "assets/2560/service/useguide/play.png";
import calendar from "assets/2560/service/useguide/calendar.svg";
import s from "./index.module.css";
export default function index() {
  return (
    <div className={`col-12 d-center flex-column ${s.container}`}>
      <div className={`${s.wrap} d-flex`}>
        <div className={`${s.img_wrap}`}>
          <div className={`${s.img} position-relative`}>
            <Image
              layout="fill"
              src="/assets/2560/service/useguide/irego.png"
            />
            <div className={`position-absolute border ${s.sm_img_wrap}`}>
              <div className={`${s.sm_img} position-relative`}>
                <Image
                  src={"/assets/2560/service/useguide/play.png"}
                  layout="fill"
                />
              </div>
            </div>
          </div>
          <div className={`${s.title} border`}>
            <div className={s.big_title}>iReGo操作指南 康复计划制定</div>
            <div className={`${s.sm_title} d-flex align-items-center`}>
              <div className={`${s.calendar} position-relative`}>
                <Image
                  layout="fill"
                  src={"/assets/2560/service/useguide/calendar.svg"}
                />
              </div>
              <span className={s.date}>2020年7月23日</span>
            </div>
          </div>
        </div>
        <div className={`${s.img_wrap}`}>
          <div className={`${s.img} position-relative`}>
            <Image
              layout="fill"
              src="/assets/2560/service/useguide/irego.png"
            />
            <div className={`position-absolute border ${s.sm_img_wrap}`}>
              <div className={`${s.sm_img} position-relative`}>
                <Image
                  src={"/assets/2560/service/useguide/play.png"}
                  layout="fill"
                />
              </div>
            </div>
          </div>
          <div className={`${s.title} border`}>
            <div className={s.big_title}>iReGo操作指南 康复计划制定</div>
            <div className={`${s.sm_title} d-flex align-items-center`}>
              <div className={`${s.calendar} position-relative`}>
                <Image
                  layout="fill"
                  src={"/assets/2560/service/useguide/calendar.svg"}
                />
              </div>
              <span className={s.date}>2020年7月23日</span>
            </div>
          </div>
        </div>
        <div className={`${s.img_wrap}`}>
          <div className={`${s.img} position-relative`}>
            <Image
              layout="fill"
              src="/assets/2560/service/useguide/irego.png"
            />
            <div className={`position-absolute border ${s.sm_img_wrap}`}>
              <div className={`${s.sm_img} position-relative`}>
                <Image
                  src={"/assets/2560/service/useguide/play.png"}
                  layout="fill"
                />
              </div>
            </div>
          </div>
          <div className={`${s.title} border`}>
            <div className={s.big_title}>iReGo操作指南 康复计划制定</div>
            <div className={`${s.sm_title} d-flex align-items-center`}>
              <div className={`${s.calendar} position-relative`}>
                <Image
                  layout="fill"
                  src={"/assets/2560/service/useguide/calendar.svg"}
                />
              </div>
              <span className={s.date}>2020年7月23日</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${s.wrap} d-flex`}>
        <div className={`${s.img_wrap}`}>
          <div className={`${s.img} position-relative`}>
            <Image
              layout="fill"
              src="/assets/2560/service/useguide/irego.png"
            />
            <div className={`position-absolute ${s.sm_img_wrap}`}>
              <div className={`${s.sm_img} position-relative`}>
                <Image
                  src={"/assets/2560/service/useguide/play.png"}
                  layout="fill"
                />
              </div>
            </div>
          </div>
          <div className={`${s.title} border`}>
            <div className={s.big_title}>iReGo操作指南 康复计划制定</div>
            <div className={`${s.sm_title} d-flex align-items-center`}>
              <div className={`${s.calendar} position-relative`}>
                <Image
                  layout="fill"
                  src={"/assets/2560/service/useguide/calendar.svg"}
                />
              </div>
              <span className={s.date}>2020年7月23日</span>
            </div>
          </div>
        </div>
        <div className={`${s.img_wrap}`}>
          <div className={`${s.img} position-relative`}>
            <Image
              layout="fill"
              src="/assets/2560/service/useguide/irego.png"
            />
            <div className={`position-absolute  ${s.sm_img_wrap}`}>
              <div className={`${s.sm_img} position-relative`}>
                <Image
                  src={"/assets/2560/service/useguide/play.png"}
                  layout="fill"
                />
              </div>
            </div>
          </div>
          <div className={`${s.title} border`}>
            <div className={s.big_title}>iReGo操作指南 康复计划制定</div>
            <div className={`${s.sm_title} d-flex align-items-center`}>
              <div className={`${s.calendar} position-relative`}>
                <Image
                  layout="fill"
                  src={"/assets/2560/service/useguide/calendar.svg"}
                />
              </div>
              <span className={s.date}>2020年7月23日</span>
            </div>
          </div>
        </div>
        <div className={`${s.img_wrap}`}>
          <div className={`${s.img} position-relative`}>
            <Image layout="fill" src={irego} />
            <div className={`position-absolute  ${s.sm_img_wrap}`}>
              <div className={`${s.sm_img} position-relative`}>
                <Image
                  src={"/assets/2560/service/useguide/play.png"}
                  layout="fill"
                />
              </div>
            </div>
          </div>
          <div className={`${s.title} border`}>
            <div className={s.big_title}>iReGo操作指南 康复计划制定</div>
            <div className={`${s.sm_title} d-flex align-items-center`}>
              <div className={`${s.calendar} position-relative`}>
                <Image
                  layout="fill"
                  src={"/assets/2560/service/useguide/calendar.svg"}
                />
              </div>
              <span className={s.date}>2020年7月23日</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
