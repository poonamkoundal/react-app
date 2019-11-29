/*
 * @file: Page.js
 * @description: It is Container file .
 * @author: Jasdeep Singh
 */
import React from 'react';
import { Link } from "react-router-dom";
import { Card, Layout, Page, Button } from '@shopify/polaris';

export default () => {
    return (
      <Page  title="Settings">
        <ul type="none" className="addproducts">
            <li>
              <Link to="/"> Back </Link>
            </li>
            <li>
                <Button primary>Logout</Button>
            </li>
        </ul>
        <Layout>
            <Layout.Section>
                <Card>
                  <h2>Customers accounts are disabled.<br/> Settings Page Here</h2>
                </Card>      
            </Layout.Section>
        </Layout>
      </Page>
    );
  };
