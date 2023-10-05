import React, { FC } from 'react';
import { Container, SpaceBetween, Box, Header, Link, ColumnLayout } from '@cloudscape-design/components';

interface DetailsProps {
    eventContext: string;
}

interface ValueLabelProps {
    label: string,
    children: any
}

const ValueWithLabel: FC<ValueLabelProps> = ({ label, children }) => (
    <div>
        <Box variant="awsui-key-label">{label}</Box>
        <div>{children}</div>
    </div>
);

export const DetailsComponent: FC<DetailsProps> = ({ eventContext }) => {
    return (
        <Container header={<Header headingTagOverride="h3">The fallen empire</Header>}>
            <ColumnLayout columns={3} variant="text-grid">
                <SpaceBetween size="l">
                    <ValueWithLabel label="Name">Fallen Empire Reading Order</ValueWithLabel>
                    <ValueWithLabel label="Author">Jacques I.</ValueWithLabel>
                    <ValueWithLabel label="Date">Wednesday October 4th 2023</ValueWithLabel>
                </SpaceBetween>
                <SpaceBetween size="l">
                    <ValueWithLabel label="Book name">
                        <Link href="https://example.com/" external={true} variant="primary">
                            Fallen Empire Reading Order
                        </Link>
                    </ValueWithLabel>
                    <ValueWithLabel label="Category">Dystopian — Sometimes considered a subgenre of fantasy or of science fiction, this genre is usually set in a bleak future (near or distant) to explore cultural or social issues. Examples include Wool by Hugh Howey and The Handmaid’s Tale by Margaret Atwood</ValueWithLabel>
                </SpaceBetween>
                <SpaceBetween size="l">
                    <ValueWithLabel label="Summary">Keep the first column(s) visible while horizontally scrolling the table content. Keep the first column(s) visible while horizontally scrolling the table content.   Line 2:40:   'Button' is defined but never used           @typescript-eslint/no-unused-vars
                        Line 2:48:   'StatusIndicator' is defined but never used  @typescript-eslint/no-unused-vars
                        Line 2:73:   'Link' is defined but never used             @typescript-eslint/no-unused-vars
                        Line 2:93:   'ProgressBar' is defined but never used      @typescript-eslint/no-unused-vars
                        Line 2:106:  'Popover' is defined but never used          @typescript-eslint/no-unused-vars</ValueWithLabel>
                    <ValueWithLabel label="Quote">Keep the first column(s) visible while horizontally scrolling the table content.</ValueWithLabel>
                </SpaceBetween>
            </ColumnLayout>
        </Container>
    );
}