import NavbarClient from '@/components/contentful/NavbarClient'
import {getNavbar} from '@/lib/contentful'

export default async function Navbar() {
  const {fields} = await getNavbar()
  const logoFields = fields.logo.fields
  const navbarLogo = {
    src: `https:${logoFields.file.url}`,
    alt: logoFields.title,
    width: logoFields.file.details.image?.width,
    height: logoFields.file.details.image?.height,
  }
  const navigation = fields.navbarItems?.map(item => {
    return {name: item.fields.label, href: item.fields.link, current: false}
  })

  return <NavbarClient navigation={navigation} logo={navbarLogo} />
}
