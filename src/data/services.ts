import { ASSETS } from './assets'

export type Service = {
  id: string
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    id: 'sourcing',
    title: 'Fresh Produce Sourcing',
    description:
      'We work directly with trusted growers to supply a wide range of seasonal fruits and vegetables. Our sourcing process focuses on quality, consistency, and food safety standards.',
    icon: ASSETS.serviceIcons.sourcing,
  },
  {
    id: 'quality',
    title: 'Quality Control & Inspection',
    description:
      'Every shipment is carefully inspected before packing and export. We monitor size, grade, freshness, and overall condition to meet international market requirements.',
    icon: ASSETS.serviceIcons.quality,
  },
  {
    id: 'packaging',
    title: 'Sorting, Grading & Packaging',
    description:
      'We provide professional sorting and grading based on client specifications. Custom packaging options are available, including private label solutions and retail-ready formats.',
    icon: ASSETS.serviceIcons.packaging,
  },
  {
    id: 'documentation',
    title: 'Export Documentation',
    description:
      'We handle all necessary export documentation, including phytosanitary certificates, certificates of origin, invoices, and customs paperwork — ensuring smooth cross-border trade.',
    icon: ASSETS.serviceIcons.documentation,
  },
  {
    id: 'logistics',
    title: 'Cold Chain & Logistics Coordination',
    description:
      'We coordinate temperature-controlled storage and transport to maintain product freshness from farm to destination.',
    icon: ASSETS.serviceIcons.logistics,
  },
]
