import * as React from "react"
import type { PageProps } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"

const DataDeletionPage = (_props: PageProps) => (
  <Layout>
    <h1>User Data Deletion Request</h1>
    <p>
      If you have used our Facebook app and want your data to be deleted, please email us at
      <a href="mailto:info@chavorrucos.com">info@chavorrucos.com</a> with the subject line "User Data
      Deletion Request".
    </p>
    <p>We will process your request within 7 days and confirm via email.</p>
    <p>
      We do not store personal data beyond what is required for functionality (e.g., page access tokens,
      which are temporary and only used for publishing content).
    </p>
  </Layout>
)

export default DataDeletionPage
