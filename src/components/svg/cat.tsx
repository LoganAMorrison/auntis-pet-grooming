import React from "react";

interface CatIconProps
  extends React.PropsWithoutRef<Omit<React.ComponentProps<"svg">, "viewBox">> {
  gradient?: { stopColor: string; offset: string }[];
}

const CatIcon: React.FC<CatIconProps> = ({ gradient, ...props }) => {
  let grad;
  if (gradient != undefined) {
    grad = (
      <linearGradient id="CatIconGradient">
        {gradient.map((gr, key) => (
          <stop stopColor={gr.stopColor} offset={gr.offset} key={key} />
        ))}
      </linearGradient>
    );
    props.fill = "url(#CatIconGradient)";
  } else {
    grad = <></>;
  }

  return (
    <svg viewBox="0 0 48.45 32.05" {...props}>
      {grad}
      <path d="M48.44,2.49c.03-.29-.02-.59,0-.88,.02-.34,.05-.78-.17-1.07-.09-.12-.23-.18-.38-.18-.1,0-.19,.02-.29,.05-.17,.05-.3,.14-.44,.25-.47,.36-.91,.75-1.29,1.2-.07,.08-.13,.15-.2,.23-.03,.04-.07,.08-.1,.12-.05,.06-.1,.06-.17,.08-.16,.04-.3,.14-.46,.17-.17,.04-.31-.03-.47-.06-.33-.06-.67-.08-1-.09-.16,0-.31,0-.47,0-.14,0-.25,.04-.37-.05-.06-.05-.12-.08-.18-.12-.21-.12-.4-.13-.63-.19-.06-.02-.11-.06-.16-.1-.29-.29-.5-.66-.76-.97-.19-.23-.4-.47-.64-.65-.13-.1-.28-.2-.44-.22-.6-.08-.58,.95-.54,1.31,0,.08,0,.16,0,.25,0,.13,.05,.26,.04,.39,0,.17,0,.35,.04,.51,.04,.17,.06,.35,.05,.53-.01,.17-.05,.31-.05,.48,0,.09,0,.18,0,.26,0,.19-.01,.37-.03,.56-.02,.17-.05,.33-.1,.5-.08,.28-.09,.51-.31,.73-.22,.22-.47,.41-.7,.62-.24,.22-.47,.45-.73,.64-.54,.41-1.17,.66-1.78,.92-.42,.18-.88,.18-1.33,.18-.31,0-.61,.07-.92,.12-.48,.07-.95,.23-1.42,.36-.57,.16-1.12,.39-1.7,.51-.57,.11-1.16,.19-1.7,.39-.75,.27-1.47,.63-2.18,.99-1.24,.63-2.44,1.36-3.55,2.21-.91,.69-1.76,1.47-2.5,2.35-.32,.38-.69,.64-1.06,.98-.63,.58-1.14,1.27-1.57,2.01-.22,.39-.42,.79-.6,1.2-.21,.49-.33,1-.67,1.42-.33,.41-.76,.74-1.09,1.16-.77,.96-1.24,2.1-1.82,3.17-.43,.81-.76,1.74-1.3,2.48-.35,.47-.77,.9-1.27,1.23-.41,.27-.91,.4-1.39,.48-.67,.12-1.35,.17-2.03,.11-.7-.06-1.4-.17-2.1-.28-.67-.11-1.38-.29-2.05-.24-.91,.07-1.87,.3-2.62,.84-.24,.17-.67,.58-.81,.95-.09,.25-.06,.49,.24,.65,.17,.08,.37,.1,.55,.13,.3,.04,.61,.06,.92,.07,1.83,.1,3.66,.11,5.47,.41,.67,.11,1.32,.32,1.99,.42,2.06,.3,4.06-.47,5.91-1.28,.51-.22,1.03-.5,1.38-.95,.32-.41,.48-.92,.59-1.42,.02-.11,.02-.24,.07-.34,.04,.03,.07,.19,.09,.23,.03,.08,.07,.15,.11,.23,.08,.14,.18,.28,.28,.41,.28,.34,.62,.62,.99,.87,.27,.18,.57,.36,.87,.48,.22,.09,.46,.15,.67,.27,.51,.28,.91,.48,1.5,.56,.72,.1,1.44,.13,2.17,.11,.32,0,.63-.03,.95-.06,.15-.01,.3-.03,.45-.04,.19-.02,.38-.1,.56-.11,.09,0,.17,.01,.26,.03,.22,.05,.44,.12,.65,.2,.1,.04,.2,.07,.3,.11,.08,.03,.16,.05,.24,.09,.15,.08,.32,.08,.48,.06,.23-.03,.46-.1,.7-.15,.13-.03,.27-.05,.41-.07,.07,0,.15,0,.22-.02,.07,0,.1-.08,.14-.13,.08-.09,.18-.15,.3-.19,.09-.03,.18-.03,.25-.08,.1-.07,.19-.15,.23-.27,.02-.05,.03-.1,.03-.15,0-.04-.01-.11,0-.15,.06,0,.12,0,.18,.02,.06,0,.12,.01,.17,.01,.09,0,.19,0,.28,0,.09,0,.2-.02,.27-.08,.02-.01,.04-.03,.05-.05,.04-.05,.05-.09,.11-.12,.05-.02,.09-.04,.14-.07,.03-.02,.05-.04,.08-.06,.05-.04,.05-.04,.11,0,.05,.03,.15,.14,.21,.13,.04-.12-.06-.27-.15-.35-.04-.04-.04-.08-.06-.13-.02-.05-.05-.11-.09-.15-.08-.09-.17-.17-.28-.23-.04-.02-.08-.03-.11-.07-.02-.03-.04-.07-.07-.1-.03-.03-.07-.06-.08-.1,.04-.04,.11-.05,.16-.07,.04-.02,.08-.04,.12-.06,.08-.04,.15-.08,.22-.13,.12-.08,.24-.17,.34-.28,.09-.09,.18-.2,.25-.31,.04-.05,.06-.11,.1-.17,.05-.07,.12-.13,.18-.19,.2-.21,.34-.46,.43-.73,.07-.23,.1-.48,.17-.71,.04-.17,.1-.33,.13-.49,.03-.16,.04-.32,.05-.48,.02-.32,.02-.65,.09-.97,.02-.08,.03-.2,.07-.27,.03-.05,.6,0,.69-.02,.11-.02,.16-.03,.27,.01,.04,.02,.08,.03,.13,.02,.26-.07,.5-.46,.69-.63,0,.09,.07,.19,.1,.27,.08,.2,.15,.4,.23,.6,.19,.5,.38,1,.6,1.48,.04,.09,.08,.18,.12,.27,.04,.08,.04,.13,.04,.21,0,.2,0,.4-.02,.61-.01,.45-.04,.95,.11,1.38,.03,.09,.07,.17,.12,.24,.05,.06,.14,.09,.17,.15,.08,.16,.12,.34,.18,.5,.03,.09,.08,.17,.12,.25,.1,.18,.03,.43,.2,.58,.06,.06,.15,.06,.22,.09,.05,.02,.11,.04,.15,.08,.04,.02,.07,.05,.1,.08,.06,.05,.11,.05,.18,.07,.14,.02,.29,0,.43,.05,.03,0,.05,.03,.08,.04,.02,0,.05,0,.08,0,.24,.05,.45,.13,.7,.11,.17,0,.33-.05,.48-.13,.04-.02,.07-.04,.11-.04,.02,0,.05,.02,.07,.02,.04,0,.08,.02,.12,.01,.11-.01,.2-.08,.28-.15,.06-.05,.12-.11,.19-.16,.06-.04,.12-.07,.18-.12,.17-.17,.12-.39,0-.57-.06-.1-.13-.19-.2-.28-.03-.03-.06-.06-.08-.1-.02-.04-.03-.08-.05-.12-.1-.17-.31-.25-.49-.31-.14-.04-.28-.07-.42-.09,.01-.07-.04-.17-.07-.23-.04-.09-.1-.18-.16-.27-.06-.09-.12-.18-.19-.27-.04-.06-.12-.13-.14-.19-.02-.05,0-.14,0-.2v-.83s0-.08,0-.11c0-.05,.04-.1,.06-.15,.15-.4,.19-.85,.22-1.28,.01-.18,0-.37,.02-.55,.01-.13,0-.25,0-.38,0-.09-.05-.2-.04-.29,.08,.1,.14,.22,.22,.32,.08,.1,.17,.2,.25,.3,.06,.08,.1,.19,.15,.29,.06,.11,.11,.22,.17,.33,.11,.2,.22,.41,.33,.61,.02,.04,.05,.08,.07,.13,.03,.04,.04,.09,.06,.13,.05,.08,.13,.12,.18,.2,.2,.27,.3,.59,.38,.91,.09,.34,.15,.69,.25,1.04,.04,.15,.09,.3,.15,.45,.08,.18,.11,.39,.19,.58,.03,.06,.07,.13,.09,.19,0,.03,0,.03-.02,.07-.04,.07-.04,.16-.02,.23,.03,.12,.11,.23,.19,.32,.13,.13,.32,.27,.51,.31,.16,.03,.32,.04,.47,.08,.16,.04,.3,.11,.47,.13,.06,0,.13,0,.19,0,.05,0,.1-.03,.16-.03,.09,0,.18,.07,.26,.08,.07,.01,.13,0,.18-.03,.06-.03,.1-.1,.16-.13,.04-.02,.1,0,.14,0,.03,0,.07,0,.1-.02,.07-.02,.14-.05,.2-.1,.08-.06,.15-.14,.23-.21,.19-.17,.38-.27,.27-.57-.05-.14-.14-.27-.24-.38-.04-.05-.1-.1-.12-.16-.02-.05-.03-.09-.06-.14-.14-.19-.4-.26-.62-.31-.08-.02-.16-.02-.24-.04-.04-.01-.04-.03-.06-.07-.06-.13-.09-.27-.12-.41-.21-.95-.3-1.93-.4-2.89-.04-.4-.08-.8-.12-1.19-.03-.29-.08-.58-.12-.87-.05-.34-.1-.68-.14-1.02,0-.06-.02-.12-.03-.19,0-.08,.02-.15,.03-.23,.04-.19,.07-.39,.1-.58,.03-.17,.05-.35,.06-.52,0-.07-.01-.14,.04-.18,.04-.03,.08-.06,.12-.09,.23-.22,.41-.5,.58-.76,.23-.37,.42-.76,.64-1.13,.2-.34,.39-.69,.57-1.04,.13-.25,.25-.5,.37-.76,0-.04,0-.09,.01-.13,.09-.39,.36-.79,.38-1.18,.01-.2,.01-.38,.09-.56,.08-.17,.2-.32,.27-.5,.03-.08,.05-.14,.1-.2,.12-.14,.12-.45,.15-.62-.04-.16,0-.33,.02-.49,.03-.36,.05-.72,.06-1.07,0-.07,0-.15,0-.22,0-.09,.04-.18,.08-.26,.08-.2,.19-.39,.3-.56,.08-.13,.18-.25,.27-.37,.06-.08,.1-.16,.15-.24,.1-.15,.24-.26,.41-.32,.05-.02,.1-.02,.15-.04,.05-.02,.08-.06,.12-.1,.11-.12,.25-.19,.31-.35,.04-.11,.1-.2,.16-.3,.23-.37,.45-.74,.45-1.19,0-.33-.05-.66-.09-.99-.02-.16-.04-.31-.05-.47-.02-.24,.03-.49,0-.73-.02-.21-.12-.24-.24-.38-.02-.03-.02-.03-.01-.06,.05-.28,.13-.56,.1-.85-.03-.32-.09-.61,0-.92,.07-.27,.25-.43,.28-.73Z" />
    </svg>
  );
};

export default CatIcon;