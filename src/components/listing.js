import React from "react";
import { TextStyle, Card, ResourceList, Thumbnail, FilterType } from '@shopify/polaris';

const Listing = ({ list, handleSelectionChange, selectedItems, sortValue, onSortChange, handleFiltersChange, searchValue, handleSearchChange, appliedFilters, loading }) => {
    const promotedBulkActions = [
        {
            content: 'Edit customers',
            onAction: () => console.log('Todo: implement bulk edit'),
        },
    ];
    return (
        <Card>
            <Card.Section>
                <ResourceList
                    resourceName={{ singular: 'product', plural: 'products' }}
                    items={list}
                    selectedItems={selectedItems}

                    renderItem={(item) => {
                        const { id, url, title, vendor, image, body_html, images } = item;
                        let media = image ? (image.src ? image.src : images[0].src) : '';
                        return (
                            <ResourceList.Item
                                id={id}
                                url={url}
                                media={<Thumbnail
                                    source={media}
                                    alt={title}
                                />}
                                accessibilityLabel={`View details for ${title}`}
                            >
                                <h3>
                                    <TextStyle variation="strong">{title}</TextStyle>
                                </h3>
                                <div>{vendor}</div>
                                <div>{body_html}</div>
                            </ResourceList.Item>
                        );
                    }}
                    sortValue={sortValue}
                    sortOptions={[
                        { label: 'Newest update', value: 'DATE_MODIFIED_DESC' },
                        { label: 'Oldest update', value: 'DATE_MODIFIED_ASC' },
                    ]}
                    onSortChange={(selected) => {
                        onSortChange('sortValue', selected);
                    }}
                    onSelectionChange={handleSelectionChange}
                    promotedBulkActions={promotedBulkActions}
                    loading={loading}
                    filterControl={<ResourceList.FilterControl
                        filters={[
                            {
                                key: 'orderCountFilter',
                                label: 'Number of orders',
                                operatorText: 'is greater than',
                                type: FilterType.TextField,
                            },
                            {
                                key: 'accountStatusFilter',
                                label: 'Account status',
                                operatorText: 'is',
                                type: FilterType.Select,
                                options: ['Enabled', 'Invited', 'Not invited', 'Declined'],
                            },
                        ]}
                        appliedFilters={appliedFilters}
                        onFiltersChange={handleFiltersChange}
                        searchValue={searchValue}
                        onSearchChange={handleSearchChange}
                    />}
                />
            </Card.Section>
        </Card>
    );
};

export default Listing;