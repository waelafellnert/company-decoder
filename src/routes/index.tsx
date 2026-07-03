import { createFileRoute } from '@tanstack/react-router'
import CompanyDecoder from '../components/CompanyDecoder'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return <CompanyDecoder />
}
