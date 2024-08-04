import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Info() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Let's Keep In Touch
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <h2 className="text-lg font-semibold">Irvine Office</h2>
                    <p>2725 Whispering Trl</p>
                    <p>Irvine, CA 92602</p>
                    <p>Tel: (949) 656 - 6134</p>
                    <p>Email: <a href="mailto:info@deyiconsultants" className="text-blue-600">info@deyiconsultants</a></p>
                </div>
            </CardContent>
        </Card>
    )
}