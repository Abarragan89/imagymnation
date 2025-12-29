import { Button } from "@/components/ui/button";

export default function ClickableButton() {
    return (
        <Button onClick={() => console.log('hey there')}>
            Click me
        </Button>
    );
}