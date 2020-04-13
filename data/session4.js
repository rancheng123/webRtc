/*
v=0
o=- 7661308223051072055 4 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE audio video data
a=msid-semantic: WMS QMieCUbgqQeO98R8buLmTn0ryDUfGDIT0TDd
m=audio 56533 UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 106 105 13 110 112 113 126
c=IN IP4 192.168.1.6
a=rtcp:9 IN IP4 0.0.0.0
a=candidate:505434299 1 udp 2122260223 192.168.1.6 56533 typ host generation 0 network-id 1 network-cost 10
a=candidate:1352903755 1 tcp 1518280447 192.168.1.6 9 typ host tcptype active generation 0 network-id 1 network-cost 10
a=ice-ufrag:5lV4
a=ice-pwd:yS3KN+y0MPyQ8doTDcEsa19z
a=ice-options:trickle
a=fingerprint:sha-256 4A:3E:73:75:4F:C4:C5:C3:5F:B2:5C:9C:C7:81:6E:57:6E:3D:1D:72:15:9C:6F:9C:FA:D1:66:12:B7:A7:4D:E8
a=setup:actpass
a=mid:audio
a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level
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
m=video 63187 UDP/TLS/RTP/SAVPF 96 98 100 102 127 97 99 101 125
c=IN IP4 192.168.1.6
a=rtcp:9 IN IP4 0.0.0.0
a=candidate:505434299 1 udp 2122260223 192.168.1.6 63187 typ host generation 0 network-id 1 network-cost 10
a=candidate:1352903755 1 tcp 1518280447 192.168.1.6 9 typ host tcptype active generation 0 network-id 1 network-cost 10
a=ice-ufrag:5lV4
a=ice-pwd:yS3KN+y0MPyQ8doTDcEsa19z
a=ice-options:trickle
a=fingerprint:sha-256 4A:3E:73:75:4F:C4:C5:C3:5F:B2:5C:9C:C7:81:6E:57:6E:3D:1D:72:15:9C:6F:9C:FA:D1:66:12:B7:A7:4D:E8
a=setup:actpass
a=mid:video
a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:4 urn:3gpp:video-orientation
a=extmap:5 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay
a=sendrecv
a=rtcp-mux
a=rtcp-rsize
a=rtpmap:96 VP8/90000
a=rtcp-fb:96 ccm fir
a=rtcp-fb:96 nack
a=rtcp-fb:96 nack pli
a=rtcp-fb:96 goog-remb
a=rtcp-fb:96 transport-cc
a=rtpmap:98 VP9/90000
a=rtcp-fb:98 ccm fir
a=rtcp-fb:98 nack
a=rtcp-fb:98 nack pli
a=rtcp-fb:98 goog-remb
a=rtcp-fb:98 transport-cc
a=rtpmap:100 H264/90000
a=rtcp-fb:100 ccm fir
a=rtcp-fb:100 nack
a=rtcp-fb:100 nack pli
a=rtcp-fb:100 goog-remb
a=rtcp-fb:100 transport-cc
a=fmtp:100 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f
a=rtpmap:102 red/90000
a=rtpmap:127 ulpfec/90000
a=rtpmap:97 rtx/90000
a=fmtp:97 apt=96
a=rtpmap:99 rtx/90000
a=fmtp:99 apt=98
a=rtpmap:101 rtx/90000
a=fmtp:101 apt=100
a=rtpmap:125 rtx/90000
a=fmtp:125 apt=102
a=ssrc-group:FID 45229327 684661583
a=ssrc:45229327 cname:bNGHIMZsvCQe0vaB
a=ssrc:45229327 msid:QMieCUbgqQeO98R8buLmTn0ryDUfGDIT0TDd 59cd0d0c-aa5e-49fc-9465-ed3c9d481e8c
a=ssrc:45229327 mslabel:QMieCUbgqQeO98R8buLmTn0ryDUfGDIT0TDd
a=ssrc:45229327 label:59cd0d0c-aa5e-49fc-9465-ed3c9d481e8c
a=ssrc:684661583 cname:bNGHIMZsvCQe0vaB
a=ssrc:684661583 msid:QMieCUbgqQeO98R8buLmTn0ryDUfGDIT0TDd 59cd0d0c-aa5e-49fc-9465-ed3c9d481e8c
a=ssrc:684661583 mslabel:QMieCUbgqQeO98R8buLmTn0ryDUfGDIT0TDd
a=ssrc:684661583 label:59cd0d0c-aa5e-49fc-9465-ed3c9d481e8c
m=application 63020 DTLS/SCTP 5000
c=IN IP4 192.168.1.6
a=candidate:505434299 1 udp 2122260223 192.168.1.6 63020 typ host generation 0 network-id 1 network-cost 10
a=candidate:1352903755 1 tcp 1518280447 192.168.1.6 9 typ host tcptype active generation 0 network-id 1 network-cost 10
a=ice-ufrag:5lV4
a=ice-pwd:yS3KN+y0MPyQ8doTDcEsa19z
a=ice-options:trickle
a=fingerprint:sha-256 4A:3E:73:75:4F:C4:C5:C3:5F:B2:5C:9C:C7:81:6E:57:6E:3D:1D:72:15:9C:6F:9C:FA:D1:66:12:B7:A7:4D:E8
a=setup:actpass
a=mid:data
a=sctpmap:5000 webrtc-datachannel 1024


*/