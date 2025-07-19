import { listCategories } from "@lib/data/categories"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import NavClient from "@modules/layout/components/nav-client"

// Force dynamic rendering to get fresh data
export const dynamic = 'force-dynamic'

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)
  const productCategories = await listCategories()
  const topCategories = productCategories?.filter((cat) => !cat.parent_category)

  return <NavClient topCategories={topCategories} />
}