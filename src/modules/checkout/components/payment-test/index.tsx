import { Badge } from "@medusajs/ui"

const PaymentTest = ({ className }: { className?: string }) => {
  return (
    <Badge color="orange" className={className}>
       
      <span className="font-semibold">عند الدفع عند الإستلام هناك رسوم مقدارها 12 ريال</span>
    </Badge>
  )
}

export default PaymentTest
