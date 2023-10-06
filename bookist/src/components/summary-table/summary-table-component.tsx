import React, { FC } from "react";
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import { Link } from "@cloudscape-design/components";

interface TableProps {
    eventContext: string;
}

export const SummaryTableComponent: FC<TableProps> = ({ eventContext }) => {
    const [
        selectedItems,
        setSelectedItems
    ] = React.useState([{ summaryname: "La recherche du bonheur", name: "Item 2", alt: "test", type: "test", description: "This is a description", quote: "", size: "small" }]);
    return (
        <Table
            onSelectionChange={({ detail }) =>
                setSelectedItems(detail.selectedItems)
            }
            selectedItems={selectedItems}
            ariaLabels={{
                selectionGroupLabel: "Items selection",
                allItemsSelectionLabel: ({ selectedItems }) =>
                    `${selectedItems.length} ${selectedItems.length === 1 ? "item" : "items"
                    } selected`,
                itemSelectionLabel: ({ selectedItems }, item) =>
                    item.name
            }}
            columnDefinitions={[
                {
                    id: "summaryname",
                    header: "SummaryName",
                    cell: item => <Link href="#">{item.summaryname}</Link>,
                    sortingField: "name",
                    isRowHeader: true
                },
                {
                    id: "author",
                    header: "Author",
                    cell: item => item.name,
                    sortingField: "name",
                    isRowHeader: true
                },
                {
                    id: "bookname",
                    header: "Book name",
                    cell: item => item.alt,
                    sortingField: "alt"
                },
                {
                    id: "category",
                    header: "Category",
                    cell: item => item.type
                },
                {
                    id: "description",
                    header: "Description",
                    cell: item => item.description
                },
                {
                    id: "quote",
                    header: "Quote",
                    cell: item => item.quote
                }
            ]}
            columnDisplay={[
                { id: "summaryname", visible: true },
                { id: "author", visible: true },
                { id: "bookname", visible: true },
                { id: "category", visible: true },
                { id: "description", visible: true },
                { id: "quote", visible: true }
            ]}
            items={[
                {
                    summaryname: "La recherche du bonheur",
                    name: "Tailor U.",
                    alt: "Le rouge et le noir",
                    description: "This is the first item",
                    quote: "You can know what will happen",
                    type: "Roman",
                    size: "Small"
                },
                {
                    summaryname: "The fallen empire",
                    name: "Jacques I.",
                    alt: "Discours de la methode",
                    description: "This is the second item",
                    quote: "You can only connect the dots looking backwards",
                    type: "Science",
                    size: "Large"
                },
                {
                    summaryname: "The last day",
                    name: "Ravolo Pentar",
                    alt: "The art of critical thinking",
                    description: "-",
                    quote: "The last thing you wanna know is how she did it",
                    type: "Novel",
                    size: "Large"
                },
                {
                    summaryname: "Right a lot, a leader perspective",
                    name: "Kirkland A.",
                    alt: "K&R",
                    description: "This is the fourth item",
                    quote: "The dark times are tough for everyone",
                    type: "Science fiction",
                    size: "Small"
                },
                {
                    summaryname: "Cramble",
                    name: "Antoine Lemeur",
                    alt: "Foundation",
                    description: "This is the fifth item with a longer description",
                    quote: "Life is about changing the way you think",
                    type: "Action",
                    size: "Large"
                },
                {
                    summaryname: "The art of paying attention",
                    name: "Sibel Emilou",
                    alt: "The old man and the sea",
                    description: "This is the sixth item",
                    quote: "You never know who is behind you",
                    type: "Biography",
                    size: "Small"
                }
            ]}
            loadingText="Loading resources"
            selectionType="multi"
            trackBy="name"
            empty={
                <Box
                    margin={{ vertical: "xs" }}
                    textAlign="center"
                    color="inherit"
                >
                    <SpaceBetween size="m">
                        <b>No resources</b>
                        <Button>Create resource</Button>
                    </SpaceBetween>
                </Box>
            }
            filter={
                <TextFilter
                    filteringPlaceholder="Find summaries"
                    filteringText=""
                />
            }
            header={
                <Header
                    counter={
                        selectedItems.length
                            ? "(" + selectedItems.length + "/10)"
                            : "(10)"
                    }
                >
                    Summaries
                </Header>
            }
            pagination={
                <Pagination currentPageIndex={1} pagesCount={2} />
            }
            preferences={
                <CollectionPreferences
                    title="Preferences"
                    confirmLabel="Confirm"
                    cancelLabel="Cancel"
                    preferences={{
                        pageSize: 10,
                        contentDisplay: [
                            { id: "variable", visible: true },
                            { id: "value", visible: true },
                            { id: "type", visible: true },
                            { id: "description", visible: true },
                            { id: "quote", visible: true }
                        ]
                    }}
                    pageSizePreference={{
                        title: "Page size",
                        options: [
                            { value: 10, label: "10 resources" },
                            { value: 20, label: "20 resources" }
                        ]
                    }}
                    wrapLinesPreference={{}}
                    stripedRowsPreference={{}}
                    contentDensityPreference={{}}
                    contentDisplayPreference={{
                        options: [
                            {
                                id: "variable",
                                label: "Variable name",
                                alwaysVisible: true
                            },
                            { id: "value", label: "Text value" },
                            { id: "type", label: "Type" },
                            { id: "description", label: "Description" }
                        ]
                    }}
                    stickyColumnsPreference={{
                        firstColumns: {
                            title: "Stick first column(s)",
                            description:
                                "Keep the first column(s) visible while horizontally scrolling the table content.",
                            options: [
                                { label: "None", value: 0 },
                                { label: "First column", value: 1 },
                                { label: "First two columns", value: 2 }
                            ]
                        },
                        lastColumns: {
                            title: "Stick last column",
                            description:
                                "Keep the last column visible while horizontally scrolling the table content.",
                            options: [
                                { label: "None", value: 0 },
                                { label: "Last column", value: 1 }
                            ]
                        }
                    }}
                />
            }
        />
    );
}