import { Metadata } from "next"

import ProfilePhone from "@modules/account//components/profile-phone"
import ProfileBillingAddress from "@modules/account/components/profile-billing-address"
import ProfileEmail from "@modules/account/components/profile-email"
import ProfileName from "@modules/account/components/profile-name"
import ProfilePassword from "@modules/account/components/profile-password"

import { getCustomer, listRegions } from "@lib/data"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "الملف",
  description: "استعرض وعدل ملف المتجر",
}

export default async function Profile() {
  const customer = await getCustomer()
  const regions = await listRegions()

  if (!customer || !regions) {
    notFound()
  }

  return (
    <div className="w-full" data-testid="profile-page-wrapper">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">الملف التعريفي</h1>
        <p className="text-base-regular">
        عرض وتحديث معلومات ملفك الشخصي، بما في ذلك اسمك وبريدك الإلكتروني
        ورقم الهاتف. يمكنك أيضًا تحديث عنوان إرسال الفواتير الخاص بك أو تغييره
        كلمة السر خاصتك.
        </p>
      </div>
      <div className="flex flex-col gap-y-8 w-full">
        <ProfileName customer={customer} />
        <Divider />
        <ProfileEmail customer={customer} />
        <Divider />
        <ProfilePhone customer={customer} />
        <Divider />
        <ProfilePassword customer={customer} />
        <Divider />
        <ProfileBillingAddress customer={customer} regions={regions} />
      </div>
    </div>
  )
}

const Divider = () => {
  return <div className="w-full h-px bg-gray-200" />
}
