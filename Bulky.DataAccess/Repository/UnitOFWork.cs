﻿using Bulky.DataAccess.Data;
using Bulky.DataAccess.Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bulky.DataAccess.Repository
{
	public class UnitOFWork : IUnitOfWork
	{
		private readonly ApplicationDbContext _db;
		public ICategoryRepository CategoryRepository { get; private set; }
        public IProductRepository ProductRepository { get; private set; }

        public UnitOFWork(ApplicationDbContext db) 
		{
			_db = db;
			CategoryRepository = new CategoryRepository(_db);
            ProductRepository = new ProductRepository(_db);

        }

		public void Save()
		{
			_db.SaveChanges();
		}
	}
}
