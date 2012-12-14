; name: MOV with address having SIB (SIB special cases, ebp|rbp + disp)
; code: "8B4C45778B8C45AA9988778B4D778B8DAA998877678B4C4577678B8C45AA998877488B4C4577488B8C45AA998877678B4D77678B8DAA998877488B4D77488B8DAA998877"

[bits 32]
mov ecx, [eax*2+ebp+0x77]
mov ecx, [eax*2+ebp+0x778899AA]
mov ecx, [ebp+0x77]
mov ecx, [ebp+0x778899AA]
[bits 64]
mov ecx, [eax*2+ebp+0x77]
mov ecx, [eax*2+ebp+0x778899AA]
mov rcx, [rax*2+rbp+0x77]
mov rcx, [rax*2+rbp+0x778899AA]
mov ecx, [ebp+0x77]
mov ecx, [ebp+0x778899AA]
mov rcx, [rbp+0x77]
mov rcx, [rbp+0x778899AA]
