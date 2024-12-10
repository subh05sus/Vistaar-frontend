import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { colorMaps } from "../../constants/consts"
import { useGeoData } from "../../contexts/GeoDataProvider";
import { ColorMap } from "types/geojson";

export function SelectScrollableColorMap() {
    const { setReqInfo } = useGeoData();
    return (
        <Select onValueChange={(value) => {
            console.log(value)
            setReqInfo((prev) => ({ ...prev, colormap_name: value as ColorMap | undefined }))
        }}>
            <SelectTrigger className="min-w-full">
                <SelectValue placeholder="Select a color map" />
            </SelectTrigger>
            <SelectContent>
                {colorMaps.map((colorMap) => (
                    <SelectItem value={colorMap}>{colorMap}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
