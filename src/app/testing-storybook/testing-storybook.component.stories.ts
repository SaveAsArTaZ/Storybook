import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {TestingStorybookComponent} from "./testing-storybook.component";
import {expect, userEvent, within} from "@storybook/test";
const meta: Meta<TestingStorybookComponent> = {
    title: 'TestingStorybook',
    component: TestingStorybookComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule],
            providers: [],
        }),
    ],
};

export default meta;
type Story = StoryObj<TestingStorybookComponent>;
export const basic: Story = {
    args: {

    },

    play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const clickButton = canvas.getByRole('button', { name: /Button/i });
    await expect(clickButton).toBeInTheDocument();
    await userEvent.click(clickButton);
    let congratsElement = canvas.getByTestId('element');
    await expect(congratsElement).toBeInTheDocument();
    },
};

export const Default: Story = {
    args: {

    },

};
