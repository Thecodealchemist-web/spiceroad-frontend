import { LineItem, Region } from "@medusajs/medusa"
import { Heading, Table } from "@medusajs/ui"

import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  items?: Omit<LineItem, "beforeInsert">[]
  region?: Region
}

const ItemsTemplate = ({ items, region }: ItemsTemplateProps) => {
  return (
    <div>
      <div className="pb-3 flex justify-center items-center">
        <Heading className="text-[2rem] leading-[2.75rem] text-center">السلة</Heading>
      </div>
      <Table >
        <Table.Header className="border-t-0 hover:bg-[#f58228]">
          <Table.Row className="text-ui-fg-subtle txt-medium-plus bg-transparent ">
            <Table.HeaderCell className="!pl-0 text-center ">المنتج</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>العدد</Table.HeaderCell>
            <Table.HeaderCell className="hidden small:table-cell">
              السعر
            </Table.HeaderCell>
            <Table.HeaderCell className="!pr-0 text-right">
              الإجمالي
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items && region
            ? items
                .sort((a, b) => {
                  return a.created_at > b.created_at ? -1 : 1
                })
                .map((item) => {
                  return <Item key={item.id} item={item} region={region} />
                })
            : Array.from(Array(5).keys()).map((i) => {
                return <SkeletonLineItem key={i} />
              })}
          
        </Table.Body>
      </Table>
    </div>
  )
}

export default ItemsTemplate
