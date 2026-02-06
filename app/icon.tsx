import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 24,
                    background: "black",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    borderRadius: "6px", // 6px radius as requested
                    overflow: "hidden",
                }}
            >
                {/* We use an img tag here pointing to the public file. 
            Note: In production 'edge' runtime, reading fs might be tricky for local files 
            without a fully qualifed URL, so we might just use the image data directly if possible.
            However, simpler approach for local: */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/profile.jpg`}
                    alt="A"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    );
}
