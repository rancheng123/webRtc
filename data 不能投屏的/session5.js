/*
v=0
o=- 7378840313194443917 5 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE 0 1 2 3
a=msid-semantic: WMS MUA9KgPEw0GlAFA2R7oHr8TVOl8vUJRoZJ5X
m=audio 53329 UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 106 105 13 110 112 113 126
c=IN IP4 192.168.1.6
a=rtcp:9 IN IP4 0.0.0.0
a=candidate:505434299 1 udp 2122260223 192.168.1.6 53329 typ host generation 0 network-id 1 network-cost 10
a=candidate:1352903755 1 tcp 1518280447 192.168.1.6 9 typ host tcptype active generation 0 network-id 1 network-cost 10
a=ice-ufrag:V3u0
a=ice-pwd:VP6TZrBDP7vNIE0/uZHniqTG
a=ice-options:trickle
a=fingerprint:sha-256 0E:D4:5C:64:E8:EE:8D:BA:0E:F7:AA:02:46:3F:39:60:7C:93:46:02:E1:58:D5:AD:3D:4F:CE:8F:58:4E:C6:AA
a=setup:actpass
a=mid:0
a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level
a=extmap:9 urn:ietf:params:rtp-hdrext:sdes:mid
a=extmap:13 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id
a=extmap:14 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id
a=recvonly
a=rtcp-mux
a=rtpmap:111 opus/48000/2
a=rtcp-fb:111 transport-cc
a=fmtp:111 minptime=10;useinbandfec=1
a=rtpmap:103 ISAC/16000
a=rtpmap:104 ISAC/32000
a=rtpmap:9 G722/8000
a=rtpmap:0 PCMU/8000
a=rtpmap:8 PCMA/8000
a=rtpmap:106 CN/32000
a=rtpmap:105 CN/16000
a=rtpmap:13 CN/8000
a=rtpmap:110 telephone-event/48000
a=rtpmap:112 telephone-event/32000
a=rtpmap:113 telephone-event/16000
a=rtpmap:126 telephone-event/8000
m=video 57158 UDP/TLS/RTP/SAVPF 96 97 98 99 100 101 102 122 127 121 125 107 108 109 124 120 123 119 114 115 116
c=IN IP4 192.168.1.6
a=rtcp:9 IN IP4 0.0.0.0
a=candidate:505434299 1 udp 2122260223 192.168.1.6 57158 typ host generation 0 network-id 1 network-cost 10
a=candidate:1352903755 1 tcp 1518280447 192.168.1.6 9 typ host tcptype active generation 0 network-id 1 network-cost 10
a=ice-ufrag:V3u0
a=ice-pwd:VP6TZrBDP7vNIE0/uZHniqTG
a=ice-options:trickle
a=fingerprint:sha-256 0E:D4:5C:64:E8:EE:8D:BA:0E:F7:AA:02:46:3F:39:60:7C:93:46:02:E1:58:D5:AD:3D:4F:CE:8F:58:4E:C6:AA
a=setup:actpass
a=mid:1
a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:4 urn:3gpp:video-orientation
a=extmap:5 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay
a=extmap:7 http://www.webrtc.org/experiments/rtp-hdrext/video-content-type
a=extmap:8 http://www.webrtc.org/experiments/rtp-hdrext/video-timing
a=extmap:10 http://tools.ietf.org/html/draft-ietf-avtext-framemarking-07
a=extmap:12 http://www.webrtc.org/experiments/rtp-hdrext/color-space
a=extmap:9 urn:ietf:params:rtp-hdrext:sdes:mid
a=extmap:13 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id
a=extmap:14 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id
a=recvonly
a=msid:MUA9KgPEw0GlAFA2R7oHr8TVOl8vUJRoZJ5X b5dc4859-82c3-4fed-8766-8adf12e8d415
a=rtcp-mux
a=rtcp-rsize
a=rtpmap:96 VP8/90000
a=rtcp-fb:96 goog-remb
a=rtcp-fb:96 transport-cc
a=rtcp-fb:96 ccm fir
a=rtcp-fb:96 nack
a=rtcp-fb:96 nack pli
a=rtpmap:97 rtx/90000
a=fmtp:97 apt=96
a=rtpmap:98 VP9/90000
a=rtcp-fb:98 goog-remb
a=rtcp-fb:98 transport-cc
a=rtcp-fb:98 ccm fir
a=rtcp-fb:98 nack
a=rtcp-fb:98 nack pli
a=fmtp:98 profile-id=0
a=rtpmap:99 rtx/90000
a=fmtp:99 apt=98
a=rtpmap:100 VP9/90000
a=rtcp-fb:100 goog-remb
a=rtcp-fb:100 transport-cc
a=rtcp-fb:100 ccm fir
a=rtcp-fb:100 nack
a=rtcp-fb:100 nack pli
a=fmtp:100 profile-id=2
a=rtpmap:101 rtx/90000
a=fmtp:101 apt=100
a=rtpmap:102 H264/90000
a=rtcp-fb:102 goog-remb
a=rtcp-fb:102 transport-cc
a=rtcp-fb:102 ccm fir
a=rtcp-fb:102 nack
a=rtcp-fb:102 nack pli
a=fmtp:102 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42001f
a=rtpmap:122 rtx/90000
a=fmtp:122 apt=102
a=rtpmap:127 H264/90000
a=rtcp-fb:127 goog-remb
a=rtcp-fb:127 transport-cc
a=rtcp-fb:127 ccm fir
a=rtcp-fb:127 nack
a=rtcp-fb:127 nack pli
a=fmtp:127 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=42001f
a=rtpmap:121 rtx/90000
a=fmtp:121 apt=127
a=rtpmap:125 H264/90000
a=rtcp-fb:125 goog-remb
a=rtcp-fb:125 transport-cc
a=rtcp-fb:125 ccm fir
a=rtcp-fb:125 nack
a=rtcp-fb:125 nack pli
a=fmtp:125 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f
a=rtpmap:107 rtx/90000
a=fmtp:107 apt=125
a=rtpmap:108 H264/90000
a=rtcp-fb:108 goog-remb
a=rtcp-fb:108 transport-cc
a=rtcp-fb:108 ccm fir
a=rtcp-fb:108 nack
a=rtcp-fb:108 nack pli
a=fmtp:108 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=42e01f
a=rtpmap:109 rtx/90000
a=fmtp:109 apt=108
a=rtpmap:124 H264/90000
a=rtcp-fb:124 goog-remb
a=rtcp-fb:124 transport-cc
a=rtcp-fb:124 ccm fir
a=rtcp-fb:124 nack
a=rtcp-fb:124 nack pli
a=fmtp:124 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=4d0032
a=rtpmap:120 rtx/90000
a=fmtp:120 apt=124
a=rtpmap:123 H264/90000
a=rtcp-fb:123 goog-remb
a=rtcp-fb:123 transport-cc
a=rtcp-fb:123 ccm fir
a=rtcp-fb:123 nack
a=rtcp-fb:123 nack pli
a=fmtp:123 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=640032
a=rtpmap:119 rtx/90000
a=fmtp:119 apt=123
a=rtpmap:114 red/90000
a=rtpmap:115 rtx/90000
a=fmtp:115 apt=114
a=rtpmap:116 ulpfec/90000
a=ssrc-group:FID 2784345366 1310862398
a=ssrc:2784345366 cname:fqhCi0N8WB9sxHbE
a=ssrc:2784345366 msid:MUA9KgPEw0GlAFA2R7oHr8TVOl8vUJRoZJ5X b5dc4859-82c3-4fed-8766-8adf12e8d415
a=ssrc:2784345366 mslabel:MUA9KgPEw0GlAFA2R7oHr8TVOl8vUJRoZJ5X
a=ssrc:2784345366 label:b5dc4859-82c3-4fed-8766-8adf12e8d415
a=ssrc:1310862398 cname:fqhCi0N8WB9sxHbE
a=ssrc:1310862398 msid:MUA9KgPEw0GlAFA2R7oHr8TVOl8vUJRoZJ5X b5dc4859-82c3-4fed-8766-8adf12e8d415
a=ssrc:1310862398 mslabel:MUA9KgPEw0GlAFA2R7oHr8TVOl8vUJRoZJ5X
a=ssrc:1310862398 label:b5dc4859-82c3-4fed-8766-8adf12e8d415
m=application 56842 DTLS/SCTP 5000
c=IN IP4 192.168.1.6
a=candidate:505434299 1 udp 2122260223 192.168.1.6 56842 typ host generation 0 network-id 1 network-cost 10
a=candidate:1352903755 1 tcp 1518280447 192.168.1.6 9 typ host tcptype active generation 0 network-id 1 network-cost 10
a=ice-ufrag:V3u0
a=ice-pwd:VP6TZrBDP7vNIE0/uZHniqTG
a=ice-options:trickle
a=fingerprint:sha-256 0E:D4:5C:64:E8:EE:8D:BA:0E:F7:AA:02:46:3F:39:60:7C:93:46:02:E1:58:D5:AD:3D:4F:CE:8F:58:4E:C6:AA
a=setup:actpass
a=mid:2
a=sctpmap:5000 webrtc-datachannel 1024
m=video 9 UDP/TLS/RTP/SAVPF 96 97 98 99 100 101 102 122 127 121 125 107 108 109 124 120 123 119 114 115 116
c=IN IP4 0.0.0.0
a=rtcp:9 IN IP4 0.0.0.0
a=ice-ufrag:V3u0
a=ice-pwd:VP6TZrBDP7vNIE0/uZHniqTG
a=ice-options:trickle
a=fingerprint:sha-256 0E:D4:5C:64:E8:EE:8D:BA:0E:F7:AA:02:46:3F:39:60:7C:93:46:02:E1:58:D5:AD:3D:4F:CE:8F:58:4E:C6:AA
a=setup:actpass
a=mid:3
a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:4 urn:3gpp:video-orientation
a=extmap:5 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay
a=extmap:7 http://www.webrtc.org/experiments/rtp-hdrext/video-content-type
a=extmap:8 http://www.webrtc.org/experiments/rtp-hdrext/video-timing
a=extmap:10 http://tools.ietf.org/html/draft-ietf-avtext-framemarking-07
a=extmap:12 http://www.webrtc.org/experiments/rtp-hdrext/color-space
a=extmap:9 urn:ietf:params:rtp-hdrext:sdes:mid
a=extmap:13 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id
a=extmap:14 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id
a=sendrecv
a=msid:NlPDCoTaozJaqvgjOIJnSQVFvTMRmls4GfN3 233b3c6d-5847-421b-8fba-7c418998d66c
a=rtcp-mux
a=rtcp-rsize
a=rtpmap:96 VP8/90000
a=rtcp-fb:96 goog-remb
a=rtcp-fb:96 transport-cc
a=rtcp-fb:96 ccm fir
a=rtcp-fb:96 nack
a=rtcp-fb:96 nack pli
a=rtpmap:97 rtx/90000
a=fmtp:97 apt=96
a=rtpmap:98 VP9/90000
a=rtcp-fb:98 goog-remb
a=rtcp-fb:98 transport-cc
a=rtcp-fb:98 ccm fir
a=rtcp-fb:98 nack
a=rtcp-fb:98 nack pli
a=fmtp:98 profile-id=0
a=rtpmap:99 rtx/90000
a=fmtp:99 apt=98
a=rtpmap:100 VP9/90000
a=rtcp-fb:100 goog-remb
a=rtcp-fb:100 transport-cc
a=rtcp-fb:100 ccm fir
a=rtcp-fb:100 nack
a=rtcp-fb:100 nack pli
a=fmtp:100 profile-id=2
a=rtpmap:101 rtx/90000
a=fmtp:101 apt=100
a=rtpmap:102 H264/90000
a=rtcp-fb:102 goog-remb
a=rtcp-fb:102 transport-cc
a=rtcp-fb:102 ccm fir
a=rtcp-fb:102 nack
a=rtcp-fb:102 nack pli
a=fmtp:102 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42001f
a=rtpmap:122 rtx/90000
a=fmtp:122 apt=102
a=rtpmap:127 H264/90000
a=rtcp-fb:127 goog-remb
a=rtcp-fb:127 transport-cc
a=rtcp-fb:127 ccm fir
a=rtcp-fb:127 nack
a=rtcp-fb:127 nack pli
a=fmtp:127 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=42001f
a=rtpmap:121 rtx/90000
a=fmtp:121 apt=127
a=rtpmap:125 H264/90000
a=rtcp-fb:125 goog-remb
a=rtcp-fb:125 transport-cc
a=rtcp-fb:125 ccm fir
a=rtcp-fb:125 nack
a=rtcp-fb:125 nack pli
a=fmtp:125 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f
a=rtpmap:107 rtx/90000
a=fmtp:107 apt=125
a=rtpmap:108 H264/90000
a=rtcp-fb:108 goog-remb
a=rtcp-fb:108 transport-cc
a=rtcp-fb:108 ccm fir
a=rtcp-fb:108 nack
a=rtcp-fb:108 nack pli
a=fmtp:108 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=42e01f
a=rtpmap:109 rtx/90000
a=fmtp:109 apt=108
a=rtpmap:124 H264/90000
a=rtcp-fb:124 goog-remb
a=rtcp-fb:124 transport-cc
a=rtcp-fb:124 ccm fir
a=rtcp-fb:124 nack
a=rtcp-fb:124 nack pli
a=fmtp:124 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=4d0032
a=rtpmap:120 rtx/90000
a=fmtp:120 apt=124
a=rtpmap:123 H264/90000
a=rtcp-fb:123 goog-remb
a=rtcp-fb:123 transport-cc
a=rtcp-fb:123 ccm fir
a=rtcp-fb:123 nack
a=rtcp-fb:123 nack pli
a=fmtp:123 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=640032
a=rtpmap:119 rtx/90000
a=fmtp:119 apt=123
a=rtpmap:114 red/90000
a=rtpmap:115 rtx/90000
a=fmtp:115 apt=114
a=rtpmap:116 ulpfec/90000
a=ssrc-group:FID 2629407405 1542043814
a=ssrc:2629407405 cname:fqhCi0N8WB9sxHbE
a=ssrc:2629407405 msid:NlPDCoTaozJaqvgjOIJnSQVFvTMRmls4GfN3 233b3c6d-5847-421b-8fba-7c418998d66c
a=ssrc:2629407405 mslabel:NlPDCoTaozJaqvgjOIJnSQVFvTMRmls4GfN3
a=ssrc:2629407405 label:233b3c6d-5847-421b-8fba-7c418998d66c
a=ssrc:1542043814 cname:fqhCi0N8WB9sxHbE
a=ssrc:1542043814 msid:NlPDCoTaozJaqvgjOIJnSQVFvTMRmls4GfN3 233b3c6d-5847-421b-8fba-7c418998d66c
a=ssrc:1542043814 mslabel:NlPDCoTaozJaqvgjOIJnSQVFvTMRmls4GfN3
a=ssrc:1542043814 label:233b3c6d-5847-421b-8fba-7c418998d66c



*/