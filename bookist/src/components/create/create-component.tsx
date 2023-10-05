import { Container, Header, FormField, Input, Form, Button, SpaceBetween, Textarea, Select } from '@cloudscape-design/components';
import React, { FC } from 'react';

interface CreateProps {
    eventContext: string;
}

export const CreateComponent: FC<CreateProps> = ({ eventContext }) => {
    const [
        selectedOption
    ] = React.useState({ label: "Option 1", value: "1" });

    return (
        <Container
            header={
                <Header
                    variant="h2"
                >
                    The fallen empire
                </Header>
            }
        >
            <form onSubmit={e => e.preventDefault()}>
                <Form
                    actions={
                        <SpaceBetween direction="horizontal" size="xs">
                            <Button formAction="none" variant="link">
                                Cancel
                            </Button>
                            <Button variant="primary">Submit</Button>
                        </SpaceBetween>
                    }
                >
                    <SpaceBetween direction="vertical" size="l">
                        <FormField label="Name">
                            <Input value={eventContext} />
                        </FormField>
                        <FormField label="Author">
                            <Input value={eventContext} />
                        </FormField>
                        <FormField label="Book name">
                            <Input value={eventContext} />
                        </FormField>
                        <FormField label="Category">
                            <Select
                                selectedOption={selectedOption}
                                options={[
                                    { label: "Option 1", value: "1" },
                                    { label: "Option 2", value: "2" },
                                    { label: "Option 3", value: "3" },
                                    { label: "Option 4", value: "4" },
                                    { label: "Option 5", value: "5" }
                                ]}
                            />
                        </FormField>
                        <FormField label="Description">
                            <Textarea
                                value="This is the summary of the book the fallen empire"
                                placeholder="This is a placeholder"
                            />
                        </FormField>
                        <FormField label="Quote">
                            <Textarea
                                value="This is the summary of the book the fallen empire"
                                placeholder="This is a placeholder"
                            />
                        </FormField>
                    </SpaceBetween>
                </Form>
            </form>
        </Container>
    );
}