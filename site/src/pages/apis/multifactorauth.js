import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '@site/src/components/ApiReference';

export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
          title={`Multi-Factor Authentication API Reference`}
          description="Voice &amp; Messaging MFA and MFA Verification. Everything you'll need to start working with our MFA API."
          keywords="Bandwidth,API,MFA,2FA,Authentication">
            <ApiReference spec={siteConfig.customFields.multiFactorAuthSpec} color={siteConfig.customFields.mfaGreen} downloadDefinitionUrl="https://github.com/Bandwidth/api-docs/blob/main/site/specs/multi-factor-auth.yml"/>
        </Layout>
    );
}
