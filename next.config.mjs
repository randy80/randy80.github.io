import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
  search: false,
})
 
// Export the final Next.js config with Nextra included
export default withNextra({
  // ... Add regular Next.js options here
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
})
