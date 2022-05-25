
const minecraftRole = "656532088505237550"
const movieRole = "717734216451883028"
const WarframeRole = "805892598274850856"

module.exports = {
    role: async function (interaction, client) {
        const id = interaction.customId;
        //if id start with Role-
        if (id.startsWith("Role-")) {
            if (id === "Role-Minecraft") {
                //check if user has role
                if (interaction.member.roles.cache.find(r => r.id === minecraftRole)) {
                    //if user has role, remove it
                    interaction.member.roles.remove(minecraftRole).catch(console.error);
                }
                else {
                    //give minecraft role
                    interaction.member.roles.add(minecraftRole);
                }

            }
            else if (id === "Role-Movie") {
                if(interaction.member.roles.cache.find(r => r.id === movieRole)){
                    interaction.member.roles.remove(movieRole).catch(console.error);
                }
                else{
                    interaction.member.roles.add(movieRole);
                }
            }
            else if (id === "Role-Warframe") {
                if(interaction.member.roles.cache.find(r => r.id === WarframeRole)){
                    interaction.member.roles.remove(WarframeRole).catch(console.error);
                }
                else{
                    interaction.member.roles.add(WarframeRole);
                }
            }

        }

    }
}
