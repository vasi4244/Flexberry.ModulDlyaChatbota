﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Modul_dlya_chatbota
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Список.
    /// </summary>
    // *** Start programmer edit section *** (Список CustomAttributes)

    // *** End programmer edit section *** (Список CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СписокE", new string[] {
            "Сотрудники as \'Сотрудники\'",
            "Сотрудники.Фамилия as \'Фамилия\'"}, Hidden=new string[] {
            "Сотрудники.Фамилия"})]
    [MasterViewDefineAttribute("СписокE", "Сотрудники", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Фамилия")]
    public class Список : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Modul_dlya_chatbota.Сотрудники fСотрудники;
        
        private IIS.Modul_dlya_chatbota.Анкетирование fАнкетирование;
        
        // *** Start programmer edit section *** (Список CustomMembers)

        // *** End programmer edit section *** (Список CustomMembers)

        
        /// <summary>
        /// Список.
        /// </summary>
        // *** Start programmer edit section *** (Список.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (Список.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.Modul_dlya_chatbota.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (Список.Сотрудники Get start)

                // *** End programmer edit section *** (Список.Сотрудники Get start)
                IIS.Modul_dlya_chatbota.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (Список.Сотрудники Get end)

                // *** End programmer edit section *** (Список.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Список.Сотрудники Set start)

                // *** End programmer edit section *** (Список.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (Список.Сотрудники Set end)

                // *** End programmer edit section *** (Список.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Modul_dlya_chatbota.Анкетирование.
        /// </summary>
        // *** Start programmer edit section *** (Список.Анкетирование CustomAttributes)

        // *** End programmer edit section *** (Список.Анкетирование CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Анкетирование"})]
        public virtual IIS.Modul_dlya_chatbota.Анкетирование Анкетирование
        {
            get
            {
                // *** Start programmer edit section *** (Список.Анкетирование Get start)

                // *** End programmer edit section *** (Список.Анкетирование Get start)
                IIS.Modul_dlya_chatbota.Анкетирование result = this.fАнкетирование;
                // *** Start programmer edit section *** (Список.Анкетирование Get end)

                // *** End programmer edit section *** (Список.Анкетирование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Список.Анкетирование Set start)

                // *** End programmer edit section *** (Список.Анкетирование Set start)
                this.fАнкетирование = value;
                // *** Start programmer edit section *** (Список.Анкетирование Set end)

                // *** End programmer edit section *** (Список.Анкетирование Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СписокE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СписокE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СписокE", typeof(IIS.Modul_dlya_chatbota.Список));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Список.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfСписок CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfСписок CustomAttributes)
    public class DetailArrayOfСписок : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Modul_dlya_chatbota.DetailArrayOfСписок members)

        // *** End programmer edit section *** (IIS.Modul_dlya_chatbota.DetailArrayOfСписок members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Список by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Список.
        /// </summary>
        public DetailArrayOfСписок(IIS.Modul_dlya_chatbota.Анкетирование fАнкетирование) : 
                base(typeof(Список), ((ICSSoft.STORMNET.DataObject)(fАнкетирование)))
        {
        }
        
        public IIS.Modul_dlya_chatbota.Список this[int index]
        {
            get
            {
                return ((IIS.Modul_dlya_chatbota.Список)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Modul_dlya_chatbota.Список dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
