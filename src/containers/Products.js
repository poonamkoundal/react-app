import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { Card, Tabs, Layout, Page, Button, FooterHelp } from '@shopify/polaris';
import Listing from '../components/listing';
import { getProductListing } from '../actions/product';

class Products extends React.Component {
    state = {
        selected: 0,
        selectedItems: [],
        sortValue: 'DATE_MODIFIED_DESC',
        appliedFilters: [],
        searchValue: '',
        loading: true
    };

    handleTabChange = (selectedTabIndex) => {
        this.setState({ selected: selectedTabIndex });
    }

    handleSelectionChange = (selectedItems) => {
        this.setState({ selectedItems });
    };

    onSortChange = (key, value) => {
        this.setState({ [key]: value });
    }

    handleFiltersChange = (appliedFilters) => {
        this.setState({ appliedFilters });
    }

    handleSearchChange = (searchValue) => {
        this.setState({ searchValue });
    };

    componentDidMount() {
        this.props.getProductListing(res => {
            if(res.status){
                this.setState({loading: false});
            } else{
                this.setState({loading: false});
            }
        });
    }

    render() {
        const { selected } = this.state;
        const tabs = [
            {
                id: 'all-customers',
                content: 'All',
                accessibilityLabel: 'All customers',
                panelID: 'all-customers-content',
            },
            {
                id: 'accepts-marketing',
                content: 'Open',
                panelID: 'accepts-marketing-content',
            },
            {
                id: 'repeat-customers',
                content: 'Unfulfiled',
                panelID: 'repeat-customers-content',
            },
            {
                id: 'prospects',
                content: 'Unpaid',
                panelID: 'prospects-content',
            },
            {
                id: 'riskyorders',
                content: 'Risky Orders',
                panelID: 'prospects-content',
            }
        ];

        const { products } = this.props;
        return (
            <Page  title="Products">
                <ul type="none" className="addproducts">
                    <li><p>Export</p></li>
                    <li>
                        <Button primary>Add Products</Button>
                    </li>
                </ul>
                <Layout>
                    <Layout.Section>
                        <Card>
                            <Tabs tabs={tabs} selected={selected} onSelect={this.handleTabChange}>
                                {selected === 0 && (
                                    <Listing list={products} handleSelectionChange={this.handleSelectionChange} selectedItems={this.state.selectedItems} sortValue={this.state.sortValue} onSortChange={this.onSortChange} handleFiltersChange={this.handleFiltersChange} appliedFilters={this.state.appliedFilters} handleSearchChange={this.handleSearchChange} searchValue={this.state.searchValue} loading={this.state.loading} />
                                )}
                            </Tabs>
                        </Card>
                    </Layout.Section>
                </Layout>
                <div className="text-center">
                    <h5>
                        <br/>
                    Customers accounts are disabled. <Link to="/settings">
                         Edit Settings
                         </Link>
                    </h5>
                
                </div>
                <FooterHelp>
                    Learn more about{' '}
                    <Link url="https://help.shopify.com/manual/orders/fulfill-orders">
                        customers
                    </Link>
                </FooterHelp>
            </Page>
        );
    }
}

Products.propTypes = {
    products: PropTypes.array.isRequired,
    getProductListing: PropTypes.func.isRequired
  };

const mapStateToProps = (state) => {
    return {
        products: state.product
    };
};

const mapDispatchToProps = (dispatch) => ({
    getProductListing: bindActionCreators(getProductListing, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);