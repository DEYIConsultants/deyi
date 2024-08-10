import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Info() {
    return (
        <div className="h-full w-full flex items-center justify-center bg-primary">
        <Card className="w-11/12 shadow-none bg-primary">
            <CardHeader>
                <CardTitle className="text-secondary">
                    Let's Keep In Touch
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-secondary">Irvine Office</h2>
                    <p className="text-secondary">2725 Whispering Trl</p>
                    <p className="text-secondary">Irvine, CA 92602</p>
                    <p className="text-secondary">Tel: (949) 656 - 6134</p>
                    <p className="text-secondary">Email: <a href="mailto:info@deyiconsultants" className="text-blue-600">info@deyiconsultants</a></p>
                </div>
            </CardContent>
        </Card>
        </div>
    )
}