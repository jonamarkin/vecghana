import Link from "next/link";
import { Music, Disc, Youtube, Video, Facebook, Instagram, Sparkles } from "lucide-react";

export default function StreamingBar() {
  return (
    <div className="streaming-bar">
      <span className="streaming-label">Stream & Connect:</span>
      <a
        href="https://open.spotify.com/artist/44LB81BhfbdhHJkogzbKyW"
        target="_blank"
        rel="noopener noreferrer"
        className="stream-pill spotify"
      >
        <Music size={16} /> Spotify
      </a>
      <a
        href="https://music.apple.com/us/artist/vocalessence-chorale/1561470636"
        target="_blank"
        rel="noopener noreferrer"
        className="stream-pill apple"
      >
        <Disc size={16} /> Apple Music
      </a>
      <a
        href="https://www.youtube.com/@VocalEssenceChoraleGhana"
        target="_blank"
        rel="noopener noreferrer"
        className="stream-pill youtube"
      >
        <Youtube size={16} /> YouTube
      </a>
      <Link
        href="/music"
        className="stream-pill"
        style={{
          background: "rgba(255, 184, 0, 0.15)",
          borderColor: "rgba(255, 184, 0, 0.4)",
          color: "#ffb800",
        }}
      >
        <Sparkles size={16} /> & All Digital Platforms
      </Link>
      <a
        href="https://www.tiktok.com/@vecghana"
        target="_blank"
        rel="noopener noreferrer"
        className="stream-pill tiktok"
      >
        <Video size={16} /> TikTok
      </a>
      <a
        href="https://www.facebook.com/vecghana"
        target="_blank"
        rel="noopener noreferrer"
        className="stream-pill facebook"
      >
        <Facebook size={16} /> Facebook
      </a>
      <a
        href="https://www.instagram.com/vocalessencechoraleghana/"
        target="_blank"
        rel="noopener noreferrer"
        className="stream-pill instagram"
      >
        <Instagram size={16} /> Instagram
      </a>
    </div>
  );
}
