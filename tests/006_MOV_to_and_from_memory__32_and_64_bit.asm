; name: MOV to and from memory. 32 and 64 bit
; code: "8B0D99887766890D99887766668B4877668B8888770000668B4889668B887888FFFF6689487766898888770000668948896689887888FFFF8B1189118B51778B91887700008B51898B917888FFFF89527789928877000089528989927888FFFF8B1289128B5B778B9B887700008B5B898B9B7888FFFF895B77899B88770000895B89899B7888FFFF8B1689168B5E778B9E887700008B5E898B9E7888FFFF895E77899E88770000895E89899E7888FFFF8B1789178B5F778B9F887700008B5F898B9F7888FFFF895F77899F88770000895F89899F7888FFFF8B0C2599887766890C259988776666678B487766678B888877000066678B488966678B887888FFFF666789487766678988887700006667894889666789887888FFFF678B11678911678B5177678B9188770000678B5189678B917888FFFF6789527767899288770000678952896789927888FFFF678B12678912678B5B77678B9B88770000678B5B89678B9B7888FFFF67895B7767899B8877000067895B8967899B7888FFFF678B16678916678B5E77678B9E88770000678B5E89678B9E7888FFFF67895E7767899E8877000067895E8967899E7888FFFF678B17678917678B5F77678B9F88770000678B5F89678B9F7888FFFF67895F7767899F8877000067895F8967899F7888FFFF668B4877668B8888770000668B4889668B887888FFFF6689487766898888770000668948896689887888FFFF488B11488911488B5177488B9188770000488B5189488B917888FFFF4889527748899288770000488952894889927888FFFF488B12488912488B5B77488B9B88770000488B5B89488B9B7888FFFF48895B7748899B8877000048895B8948899B7888FFFF488B16488916488B5E77488B9E88770000488B5E89488B9E7888FFFF48895E7748899E8877000048895E8948899E7888FFFF488B17488917488B5F77488B9F88770000488B5F89488B9F7888FFFF48895F7748899F8877000048895F8948899F7888FFFF"

[bits 32]
mov ecx,[0x66778899]
mov [0x66778899],ecx
mov cx,[eax+0x77]
mov cx,[eax+0x7788]
mov cx,[eax-0x77]
mov cx,[eax-0x7788]
mov [eax+0x77], cx
mov [eax+0x7788], cx
mov [eax-0x77], cx
mov [eax-0x7788], cx
mov edx, [ecx]
mov [ecx], edx
mov edx,[ecx+0x77]
mov edx,[ecx+0x7788]
mov edx,[ecx-0x77]
mov edx,[ecx-0x7788]
mov [edx+0x77], edx
mov [edx+0x7788], edx
mov [edx-0x77], edx
mov [edx-0x7788], edx
mov edx, [edx]
mov [edx], edx
mov ebx,[ebx+0x77]
mov ebx,[ebx+0x7788]
mov ebx,[ebx-0x77]
mov ebx,[ebx-0x7788]
mov [ebx+0x77], ebx
mov [ebx+0x7788], ebx
mov [ebx-0x77], ebx
mov [ebx-0x7788], ebx
mov edx, [esi]
mov [esi], edx
mov ebx,[esi+0x77]
mov ebx,[esi+0x7788]
mov ebx,[esi-0x77]
mov ebx,[esi-0x7788]
mov [esi+0x77], ebx
mov [esi+0x7788], ebx
mov [esi-0x77], ebx
mov [esi-0x7788], ebx
mov edx, [edi]
mov [edi], edx
mov ebx,[edi+0x77]
mov ebx,[edi+0x7788]
mov ebx,[edi-0x77]
mov ebx,[edi-0x7788]
mov [edi+0x77], ebx
mov [edi+0x7788], ebx
mov [edi-0x77], ebx
mov [edi-0x7788], ebx
[bits 64]
mov ecx,[0x66778899]
mov [0x66778899],ecx
mov cx,[eax+0x77]
mov cx,[eax+0x7788]
mov cx,[eax-0x77]
mov cx,[eax-0x7788]
mov [eax+0x77], cx
mov [eax+0x7788], cx
mov [eax-0x77], cx
mov [eax-0x7788], cx
mov edx, [ecx]
mov [ecx], edx
mov edx,[ecx+0x77]
mov edx,[ecx+0x7788]
mov edx,[ecx-0x77]
mov edx,[ecx-0x7788]
mov [edx+0x77], edx
mov [edx+0x7788], edx
mov [edx-0x77], edx
mov [edx-0x7788], edx
mov edx, [edx]
mov [edx], edx
mov ebx,[ebx+0x77]
mov ebx,[ebx+0x7788]
mov ebx,[ebx-0x77]
mov ebx,[ebx-0x7788]
mov [ebx+0x77], ebx
mov [ebx+0x7788], ebx
mov [ebx-0x77], ebx
mov [ebx-0x7788], ebx
mov edx, [esi]
mov [esi], edx
mov ebx,[esi+0x77]
mov ebx,[esi+0x7788]
mov ebx,[esi-0x77]
mov ebx,[esi-0x7788]
mov [esi+0x77], ebx
mov [esi+0x7788], ebx
mov [esi-0x77], ebx
mov [esi-0x7788], ebx
mov edx, [edi]
mov [edi], edx
mov ebx,[edi+0x77]
mov ebx,[edi+0x7788]
mov ebx,[edi-0x77]
mov ebx,[edi-0x7788]
mov [edi+0x77], ebx
mov [edi+0x7788], ebx
mov [edi-0x77], ebx
mov [edi-0x7788], ebx
[bits 64]
mov cx,[rax+0x77]
mov cx,[rax+0x7788]
mov cx,[rax-0x77]
mov cx,[rax-0x7788]
mov [rax+0x77], cx
mov [rax+0x7788], cx
mov [rax-0x77], cx
mov [rax-0x7788], cx
mov rdx, [rcx]
mov [rcx], rdx
mov rdx,[rcx+0x77]
mov rdx,[rcx+0x7788]
mov rdx,[rcx-0x77]
mov rdx,[rcx-0x7788]
mov [rdx+0x77], rdx
mov [rdx+0x7788], rdx
mov [rdx-0x77], rdx
mov [rdx-0x7788], rdx
mov rdx, [rdx]
mov [rdx], rdx
mov rbx,[rbx+0x77]
mov rbx,[rbx+0x7788]
mov rbx,[rbx-0x77]
mov rbx,[rbx-0x7788]
mov [rbx+0x77], rbx
mov [rbx+0x7788], rbx
mov [rbx-0x77], rbx
mov [rbx-0x7788], rbx
mov rdx, [rsi]
mov [rsi], rdx
mov rbx,[rsi+0x77]
mov rbx,[rsi+0x7788]
mov rbx,[rsi-0x77]
mov rbx,[rsi-0x7788]
mov [rsi+0x77], rbx
mov [rsi+0x7788], rbx
mov [rsi-0x77], rbx
mov [rsi-0x7788], rbx
mov rdx, [rdi]
mov [rdi], rdx
mov rbx,[rdi+0x77]
mov rbx,[rdi+0x7788]
mov rbx,[rdi-0x77]
mov rbx,[rdi-0x7788]
mov [rdi+0x77], rbx
mov [rdi+0x7788], rbx
mov [rdi-0x77], rbx
mov [rdi-0x7788], rbx
